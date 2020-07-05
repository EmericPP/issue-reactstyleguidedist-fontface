const path = require('path')

module.exports = {
	title: 'React Style Guide Example',
	require: [
		path.join(__dirname, 'src/assets/app.css'),
	],
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
					],
				},
				{
						test: /\.(woff|woff2|eot|ttf|otf)$/,
						use: [{
								loader: 'file-loader',
								options: {
										name: '[name].[ext]',
										outputPath: path.join(__dirname, 'fonts/'),
								}
						}],
				},
				{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] }
			],
		},
	},
};
