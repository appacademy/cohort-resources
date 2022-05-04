const path = require('path');

module.exports = {
  entry: './frontend/tea_shop.jsx',
  output: {
    path: path.resolve(__dirname), 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/], // [/\.jsx?$/], // change to this in when we add react
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'] // ['@babel/env', '@babel/react'] // change to this when we add react
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'] // ['.js', '.jsx', '*'] // change to this when we add react
  }
};