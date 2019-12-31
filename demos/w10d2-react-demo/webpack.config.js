// import path module, already included with Node
const path = require('path');

module.exports = {
    // things to change block
    entry: "./frontend/entry.jsx",
    output: {
        path: path.resolve(__dirname), // gets absolute path to our current directory
        filename: "bundle.js"
    },
    // things to change block
    
    // makes debugging actually possible
    devtool: 'source-map',

    // allows webpack to use babel
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
    resolve: {
        extensions: ['.js', '.jsx', '*'] // allows us to drop .js || .jsx from imports
    } 
}