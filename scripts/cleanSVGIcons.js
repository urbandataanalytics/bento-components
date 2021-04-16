import glob from 'glob';
import fs from 'fs';

const files = glob.sync('src/icons/svg/*.svg');
const attributesToClean = [' stroke', ' fill', ' width', ' height'];

function cleanAttributes(content, attributes = attributesToClean) {
  let result = content;
  let hasAttributes = false;
  attributes.forEach(attr => {
    const regex = new RegExp(attr + '="[^"]*"', 'gi');
    if (regex.test(result)) {
      result = result.replace(regex, '');
      hasAttributes = true;
    }
  });

  return {
    result,
    hasAttributes
  };
}

async function cleanSVGFile(file) {
  return new Promise((res, reject) => {
    fs.readFile(file, 'utf8', (err, contents) => {
      if (err) reject(err);
      res(contents);
    });
  }).then(content => {
    const { result, hasAttributes } = cleanAttributes(content);
    if (hasAttributes) {
      fs.writeFile(file, result, err => {
        console.error(err);
      });
    }
  });
}

Promise.all(files.map(file => cleanSVGFile(file))).catch(e => console.error(e));
