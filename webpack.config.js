const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        libraryTarget: 'var',
        library: 'client'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, // instead of style-loader
                "css-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "index.html")
        }),

        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, "src", "about.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'blog-post.html',
            template: path.resolve(__dirname, "src", "blog-post.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: path.resolve(__dirname, "src", "contact.html")
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: 'img' },

            ],
        }),
        new MiniCssExtractPlugin(),

    ]
}