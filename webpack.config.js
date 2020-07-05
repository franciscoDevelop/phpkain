// webpack.config.js
const path = require('path');

module.exports = {
  context: __dirname,

  entry: {
    app: './resources/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }]
  },
  plugins: []
};
