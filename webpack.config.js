const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appSrcDirectory = __dirname + "/src";
const loaders = require('./webpack/loaders');

const isProdMode = process.env['NODE_ENV'] === 'prod';


var devPlugins = [];

if (isProdMode) {
    devPlugins = [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
    ];
}

/**
 * @type {webpack.Configuration}
 */
const config = {
    devtool: 'source-map',
    debug: !isProdMode,
    context: appSrcDirectory,
    entry: {
        app: appSrcDirectory + '/bootstrap.ts',
        vendor: appSrcDirectory + '/vendor.ts'
    },
    output: {
        filename: 'c.js',
        path: __dirname + '/build'
    },
    module: {
        loaders: loaders.allLoaders(appSrcDirectory)
    },
    resolve: {
        root: appSrcDirectory,
        extensions: ["", ".webpack.js", ".web.js", ".js", '.ts']
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            appSrcDirectory
        ),
        new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.bundle.js"}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            __IS_PROD_MODE__: isProdMode
        }),
        ...devPlugins
    ]
};


module.exports = config;
