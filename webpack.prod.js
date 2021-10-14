const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = merge( common, {
	mode: 'production',
	output: {
		path: path.join( __dirname, 'build' ),
		filename: '[name][fullhash].bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './src/template.html' })
	]
})