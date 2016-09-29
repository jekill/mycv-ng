const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appSrcDirectory = __dirname + "/src";
const loaders = require('./webpack/loaders');

const isProdMode = global.__IS_PROD_MODE__ = process.env['NODE_ENV'] === 'prod';


var devPlugins = [];

if (isProdMode) {
    devPlugins = [
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            debug: false,
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

    context: appSrcDirectory,
    entry: {
        app: appSrcDirectory + '/bootstrap.ts',
        // vendor: appSrcDirectory + '/vendor.ts',
        polyfills: appSrcDirectory + '/polyfills.ts'
    },
    output: {
        filename: 'c.js',
        path: __dirname + '/build'
    },
    module: {
        loaders: loaders.allLoaders(appSrcDirectory)
    },
    resolve: {
        extensions: [ ".webpack.js", ".web.js", ".js", '.ts']
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: !isProdMode
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            appSrcDirectory
        ),
        new webpack.optimize.CommonsChunkPlugin({names: [/*"vendor",*/ "polyfills"], filename: "[name].bundle.js"}),
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
