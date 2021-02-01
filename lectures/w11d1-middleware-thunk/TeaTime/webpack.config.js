const path = require('path');

module.exports = {
  entry: './frontend/tea_shop.jsx',
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"), 
    // puts bundle.js into the correct folder for rails to use 
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/], 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env','@babel/react'] 
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*','.jsx'] 
  }
}