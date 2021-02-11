var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports = {
	entry: __dirname + '/javascript/app.js',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['core', 'node_modules']
	},
	output: {
		filename: 'transformed.js',
		path: __dirname
	},
	plugins: [HTMLWebpackPluginConfig]
};
