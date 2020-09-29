const path = require("path");

module.exports = {
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(__dirname), //put in root of tree
    filename: "bundle.js"
  },
  devtool: 'source-map', //give me the line of code for errors 
  resolve: {
    extensions: [".js", ".jsx", "*"] //makes importing easier, autofill 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //read all js and jsx files 
        exclude: /(node_modules)/,  //don't include this EVER; it heavy
        use: {
          loader: 'babel-loader', //tell webpack to use this to apply changes 
          query: {
            presets: ['@babel/env', '@babel/react'] //rules we set when webpack goes through this loader 
          }
        }
      }
    ]
  }

}
