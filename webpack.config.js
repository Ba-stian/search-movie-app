const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
	const env = dotenv.config().parsed;

	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});
	return {
		entry: './src/index.js',
		output: {
			path: path.join(__dirname, '/dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
			],
		},
		devServer: {
			host: '127.0.0.1',
			port: 4000,
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
				favicon: './public/glasses.png',
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin(envKeys),
		],
	};
};
