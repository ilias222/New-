const HtmlWebpackPlugin = require ('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// import './styles/master.css';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require("path-browserify");
//  const __filename = fileURLToPath(import.meta.url);
//  const __dirname = dirname(__filename);

module.exports = {
    entry: './src/main.js',
    output:{
        // path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module:{
        rules:[
            {
                test: /\\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\\.s[as]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({template: resolve(_dirname, 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        port: 9000
    }
};