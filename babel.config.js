module.exports = function (api) {
  api.assertVersion(7);
  api.cache.forever();

  return {
    presets: [['@adeira/babel-preset-adeira'], ['@babel/preset-typescript']],
    plugins: ['babel-plugin-styled-components'],
    env: {
      test: {
        plugins: ['require-context-hook']
      }
    }
  };
};
