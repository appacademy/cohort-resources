const path = require('path');

module.exports = {
    entry: './frontend/entry.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // regex matcher for which files to run this loader on
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'] // which presets to run
                    }
                },
            }
        ]
    }
};