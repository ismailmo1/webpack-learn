const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        page1: './src/page1/script.js',
        page2: './src/page2/script.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page1/index.html",
            filename: "page1/index.html",
            chunks: ['page1'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/page2/index.html",
            filename: "page2/index.html",
            chunks: ['page2']
        }),
    ]

}