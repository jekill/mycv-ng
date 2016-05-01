
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appSrcDirectory = __dirname + "/src";
const loaders  = require('./webpack/loaders');

/**
 * @type {webpack.Configuration}
 */
const config = {
    devtool: 'source-map',
    debug: true,
    context: appSrcDirectory,
    entry: 'bootstrap.ts',
    output: {
        filename: 'c.js',
        path: './build'
    },
    module: {
        loaders: loaders.allLoaders(appSrcDirectory)
    },
    resolve: {
        root: appSrcDirectory,
        extensions: ["", ".webpack.js", ".web.js", ".js", '.ts']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            inject:'body'
        })
    ]
};


module.exports = config;
