module.exports = {
  output: {
    path: `${__dirname}/umd`,
    library: 'Bento',
    libraryTarget: 'umd',
    filename: 'bento-components.min.js'
  },

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'reactDOM'
  }
};
