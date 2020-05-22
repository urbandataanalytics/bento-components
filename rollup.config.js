import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import url from '@rollup/plugin-url';

// NOTE: this can be removed once the next version of rollup-plugin-commonjs is released
const namedExports = {
  'prop-types': ['object', 'func', 'oneOfType', 'node', 'bool', 'string', 'any', 'arrayOf'],
  'react-dom': ['createPortal'],
  'react-is': ['isValidElementType']
};

const formats = ['esm', 'umd'];
const plugins = [
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  url({
    // by default, rollup-plugin-url will not handle font files
    include: ['**/*.woff', '**/*.woff2'],
    // setting infinite limit will ensure that the files
    // are always bundled with the code, not copied to /dist
    limit: Infinity
  }),
  resolve(),
  commonjs({ namedExports }),
  terser(),
  url({
    include: ['**/*.ttf', '**/*.woff2'],
    limit: Infinity
  }),
  visualizer({ sourcemap: true })
];

export default [
  {
    input: 'src/index.js',
    external: ['styled-components', 'react', 'react-dom'],
    plugins,
    output: formats.map(format => ({
      file: `lib/dist/browser.${format}.js`,
      format,
      sourcemap: true,
      name: 'bento',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled'
      }
    }))
  }
];
