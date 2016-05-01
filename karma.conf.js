// Karma configuration
// Generated on Tue Apr 26 2016 16:07:33 GMT+0300 (MSK)

const loaders = require('./webpack/loaders');
const appSrcDirectory = __dirname + "/src";


module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine','chai'],


        // list of files / patterns to load in the browser
        files: [
            './src/tests.ts'
        ],

        plugins: [
            require('karma-jasmine'),
            require('karma-firefox-launcher'),
            require('karma-chai'),
            require('karma-webpack'),
            require('karma-sourcemap-loader'),
            require('karma-coverage')
        ],
        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './src/**/*.ts':[
                'webpack',
                'sourcemap',
                'coverage'
            ]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        webpack:{
            entry: './src/tests.ts',
            devtool: 'source-map',
            verbose: true,
            debug:true,
            resolve: {
                extensions: ['', '.webpack.js', '.web.js','.ts', '.js']
            },
            module: {
                loaders: loaders.allLoaders(appSrcDirectory)
            }
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox', 'Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
