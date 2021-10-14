const path = require( 'path' );
const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = merge( common, {
	mode: 'development',
	output: {
		path: path.join( __dirname, 'build' ),
		filename: 'index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/template.html' })
	]
})