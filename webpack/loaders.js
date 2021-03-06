exports.allLoaders = function (appSrcDirectory, PROD_MODE) {
    PROD_MODE = !!PROD_MODE
    let loaders = [
        {
            test: /\.ts$/,
            loaders: [
                '@angularclass/hmr-loader?pretty=' + !PROD_MODE + '&prod=' + PROD_MODE,
                'awesome-typescript-loader'
            ],
            exclude: [/node_modules/, /\.(spec|e2e|d)\.ts$/]
        },
        {test: /\.html$/, loaders: ['raw-loader', 'ejs-html-loader'], exclude: [appSrcDirectory + '/index.html']},
        // {test: /\.html$/, loader: 'raw-loader',exclude:[appSrcDirectory+'/index.html']},
        // {test: /\.scss$/,  loaders: ['raw-loader', 'sass-loader?sourceMap']}
        {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader?sourceMap']},
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

    return loaders;
};
