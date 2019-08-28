1. npm init --yes 
    * will setup package.json 
2. install these packages aka ``` npm install package1 package2 etc```
    * webpack
    * webpack-cli
    * @babel/core
    * @babel/preset-env
    * @babel/preset-react
    * babel-loader
    * react
    * react-dom
3. create a webpack.config.js 
    * touch webpack.config.js 
    * configure webpack.config.js to the correct entry and output points
```javascript
    // requiring in built-in node module called path
const path = require('path');
​
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
```
4. In the generated package.json:

    * Add a webpack script for webpack to your package.json ("webpack": "webpack --mode=development --watch")
    * Create a .gitignore for your node modules and bundled files

```javascript 
{
  "name": "minesweeper",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "webpack": "webpack --mode=development --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.7"
  }
}

```