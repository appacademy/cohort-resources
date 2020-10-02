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
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './frontend/half_time.jsx', //half_time is just an example
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
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
    devtool: 'source-map'
};
```
* Add this if you are on WSL and the watch flag does not work aka webpack doesn't update with changes. 
``` 
watch: true,
  watchOptions: {
    poll: true
  }
```
4. In the generated package.json:

    * Add a webpack script for webpack to your package.json ("webpack": "webpack --mode=development --watch")
    * For students on WSL and added the `watchOptions` to config file, use this script("webpack": "webpack --watch --watch-poll --mode=development")
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