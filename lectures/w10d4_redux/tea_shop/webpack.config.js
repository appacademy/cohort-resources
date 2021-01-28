const path = require('path');

module.exports = {
  entry: './frontend/tea_shop.js',
  output: {
    path: path.resolve(__dirname), 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/], 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'] 
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*'] 
  }
}