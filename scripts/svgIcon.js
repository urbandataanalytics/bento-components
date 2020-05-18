import path from 'path';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import capitalize from 'capitalize';
import camelcase from 'camelcase';
import mkdirp from 'mkdirp';
import glob from 'glob';
import svgr from '@svgr/core';

const files = glob.sync('src/icons/svg/*.svg');

const names = files.map(inputFileName => {
  const baseName = path.basename(inputFileName).replace(/( \(custom\))?\.svg$/, '');
  const functionName = capitalize(camelcase(baseName), true);
  const outputComponentFileName = `${functionName}`;

  return {
    inputFileName,
    outputComponentFileName,
    functionName,
    baseName
  };
});

const componentPath = path.join(__dirname, '..', 'src', 'icons');
mkdirp(componentPath);

function getHTMLComments(content) {
  return Object.assign(
    {},
    ...(RegExp(/<!--([\s\S]*?)-->/gm).test(content)
      ? content.match(/<!--([\s\S]*?)-->/gm).map(item => {
          // remove HTML comments and split by colon
          const items = item.replace(/<!--([\s\S]*?)-->/gm, '$1').split(':');
          // one icon has color as character
          const value = items[1] === '' && items[2] === '' ? ':' : items[1];
          return { [items[0]]: value };
        })
      : [])
  );
}

function getProperty(attributes, name, defaultValue = null) {
  for (let i = attributes.length - 1; i >= 0; i -= 1) {
    if (attributes[i].name === name) {
      return attributes[i].value;
    }
  }
  return defaultValue;
}
function getViewBox(attributes) {
  return getProperty(attributes, 'viewBox', '0 0 24 24');
}

function findFillAttributes(dom, content, name) {
  const comments = getHTMLComments(dom.serialize());
  // only check icons that don't have replacement for icon font
  if (comments && comments.iconFont !== 'false' && comments.customColor == null) {
    const prohibitedAttributes = ['fill'];
    const phrase = attrName =>
      `${attrName} attribute find on ${name} SVG icon. Please delete the ${attrName} or redraw the icon. Otherwise the icon font will be broken.`;

    const findAttrAndThrowErr = node => {
      prohibitedAttributes.forEach(n => {
        if (getProperty(node.attributes, n)) {
          console.error(phrase(n));
          process.exit(1);
        }
      });
    };
    // For the main DOM element
    findAttrAndThrowErr(content);
    // for all the children - paths
    Object.values(content.children).forEach(node => findAttrAndThrowErr(node));
  }
}

const template = (code, config, state) => `
/* eslint-disable */
    import * as React from 'react';
    import PropTypes from 'prop-types';
    import Icon from '../../components/Icon';

    const Icon${state.componentName} = props => {
      return (
        ${code.replace(
          /<svg\b[^>]* viewBox="(\b[^"]*)".*>([\s\S]*?)<\/svg>/g,
          `<Icon viewBox='$1' name='Icon${state.componentName}' {...props}>$2</Icon>`
        )}
      );
    };
    
    Icon${state.componentName}.propTypes = {
      color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning']),
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      customColor: PropTypes.string
    }

    export default Icon${state.componentName};
    `;

const definitelyTypedTemplate = functionName => `export interface Props {
  color?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'critical';
  customColor?: string;
  size?: 'small' | 'medium' | 'large';
}

declare const Icon${functionName}: React.FunctionComponent<Props>;

export default Icon${functionName};
`;

names.forEach(async ({ inputFileName, outputComponentFileName, functionName }) => {
  const dom = await JSDOM.fromFile(inputFileName);
  const content = dom.window.document.querySelector('svg');
  findFillAttributes(dom, content, inputFileName);

  svgr(
    content.outerHTML,
    {
      prettierConfig: {
        parser: 'babel'
      },
      svgAttributes: { viewBox: getViewBox(content.attributes) },
      code: content.outerHTML,
      template
    },
    { componentName: functionName }
  ).then(jsCode => {
    const newComponentPath = `${componentPath}/${outputComponentFileName}`;

    fs.mkdirSync(newComponentPath, { recursive: true }, error => {
      if (error) {
        console.warn(error);
      }
    });

    fs.writeFileSync(path.join(newComponentPath, 'index.js'), jsCode);
    // write .d.ts for every icon
    fs.writeFileSync(
      path.join(newComponentPath, `index.d.ts`),
      definitelyTypedTemplate(functionName)
    );
  });
});

const index = names
  .map(
    ({ functionName }) => `export { default as Icon${functionName} } from './${functionName}';\n`
  )
  .join('');
fs.writeFileSync(path.join(componentPath, 'index.js'), index);

const indexTs = ``;

const indexTsTypes = names
  .map(
    ({ functionName }) => `export { default as Icon${functionName} } from './${functionName}';\n`
  )
  .join('');

fs.writeFileSync(path.join(componentPath, 'index.d.ts'), indexTs + indexTsTypes);

// create icons json file
Promise.all(
  names.map(
    ({ inputFileName, baseName }) =>
      new Promise((resolve, reject) => {
        fs.readFile(inputFileName, 'utf8', (err, content) => {
          if (err) reject();
          // only get the HTML comments
          const comments = getHTMLComments(content);
          const url = `URL/${baseName}.svg`;
          const dom = JSDOM.fragment(content);
          const svg = dom.querySelector('svg').outerHTML;
          resolve({ [baseName]: { ...comments, svg, url } });
        });
      })
  )
).then(data =>
  fs.writeFileSync(
    path.join(__dirname, '..', 'src', 'data', 'icons.json'),
    JSON.stringify(Object.assign({}, ...data))
  )
);
