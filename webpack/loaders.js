exports.allLoaders = function (appSrcDirectory) {
    return [
        {test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/},
        {test: /\.html$/, loaders: ['raw-loader', 'ejs-html'], exclude: [appSrcDirectory + '/index.html']},
        // {test: /\.html$/, loader: 'raw-loader',exclude:[appSrcDirectory+'/index.html']},
        // {test: /\.scss$/,  loaders: ['raw-loader', 'sass-loader?sourceMap']}
        {test: /\.scss$/, loaders: ['raw-loader','sass-loader?sourceMap']},
        {test: /\.json$/, loader: 'json-loader'},
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: /angular/,
            exclude: /node_modules/,
            query: {
                compact: false,
            },
        }
    ];
};
