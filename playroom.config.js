module.exports = {
  components: './playroom/components',
  outputPath: './.out/playroom',
  title: 'Bento Components Library',
  snippets: './playroom/snippets.js',
  frameComponent: './playroom/FrameComponent.js',
  widths: ['544px', '768px', '1012px', '1280px'],
  port: 9005,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  baseUrl: '/bento-components/playroom/',
  webpackConfig: () => ({
    module: {
      rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: '/node_modules/' }]
    }
  })
};
