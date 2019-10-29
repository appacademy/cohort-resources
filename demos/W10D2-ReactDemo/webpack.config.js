var path = require('path');

module.exports = {
    entry: './frontend/entry.jsx',
    output: {
      path: path.resolve(__dirname),
      filename: './bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'react']
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