// requiring in built-in node module called path
const path = require('path');

module.exports = {
  // tell webpack where entry point file lives
  entry: './frontend/entry_file.jsx',
  // tell webpack where to output bundled js file
  output: {
    // use path module to get absolute path to current directory (2 underscores)
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  // lets us debug in js files we wrote instead of bundled webpack file
  devtool: 'source-map',
  // sets up babel to transpile ES6/React code to ES5, browser-compatible code
  module: {
    rules: [
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
  // allows us to drop .js or .jsx when importing files
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}