const path = require('path');

module.exports = {
  entry: './frontend/entry.jsx', 
  output: { 
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: { 
    extensions: [".js", ".jsx", "*"],
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
   }
 }

//packages
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom

//CSS link to dog.css
<link rel="stylesheet" href="./stylesheets/dog.css" />

//CSS in dog.css
.app {
  border: solid red 3px;
}

.dog-index {
  border: solid green 3px;
}
.dog-detail {
  border: solid blue 3px;
  cursor: pointer;
}

// jQuery only for AJAX
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


/* 
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <!-- jQuery only for AJAX -->
   <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
   <!-- <script src="bundle.js" charset="utf-8"></script> -->
   <!-- <link rel="stylesheet" href="./stylesheets/dog.css" /> -->
   <title>Dog App!!</title>
</head>
<body>
   
</body>
</html>

*/