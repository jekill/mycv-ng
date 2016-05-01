exports.allLoaders = function (appSrcDirectory) {
    return [
        {test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/},
        {test: /\.html$/, loaders: ['raw-loader', 'ejs-html'], exclude: [appSrcDirectory + '/index.html']},
        // {test: /\.html$/, loader: 'raw-loader',exclude:[appSrcDirectory+'/index.html']},
        // {test: /\.scss$/,  loaders: ['raw-loader', 'sass-loader?sourceMap']}
        {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader?sourceMap']}
    ];
};
