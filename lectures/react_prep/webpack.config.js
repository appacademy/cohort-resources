const path = require('path');

module.exports = {
	context: __dirname,
	entry: './frontend/react1.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: [ '@babel/env', '@babel/react' ]
					}
				}
			}
		]
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: [ '.js', '.jsx', '*' ]
	}
};
