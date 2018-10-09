const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseSrcDir = path.join(__dirname, 'src');
const baseDistDir = path.join(__dirname, 'dist');

module.exports = {
    entry: path.join(baseSrcDir, 'index.js'),
    output: {
        path: baseDistDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({
        template: path.join(baseSrcDir, 'index.html'),
        filename: path.join(baseDistDir, 'index.html')
    })]
};