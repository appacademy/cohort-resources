// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/entry.jsx', // can be whatever you want
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'] // takes our jsx and turns it into vanilla js
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};