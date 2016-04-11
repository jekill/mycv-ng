const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appSrcDirectory = __dirname + "/src";


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
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader',exclude:[appSrcDirectory+'/index.html']},
            // {test: /\.scss$/,  loaders: ['raw-loader', 'sass-loader?sourceMap']}
            {test: /\.scss$/,  loaders: ['raw-loader', 'sass-loader?sourceMap']}
        ]
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
