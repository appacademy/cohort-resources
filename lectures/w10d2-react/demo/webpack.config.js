const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx', // in the past was index.js
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js' // in the past we used main.js
  },
  module: {
    rules: [ // this is all for babel, which converts es6 to es5, just copy paste
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map', // find line in original file where bug happens 
  resolve: {
    extensions: [".js", ".jsx", "*"] // allows us to bundle different file types
  }
}