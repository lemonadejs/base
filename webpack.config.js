module.exports = {
    target: 'web',
    entry: './src/index.js',
    mode: 'development',
    optimization: {
        minimize: false
    },
    output: {
        filename: 'index.js',
        path: 'public/dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static : {
            directory : "./"
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        port: 3010,
        devMiddleware: {
            publicPath: "https://localhost:3000/dist/",
        },
        hot: "only",
    },
    stats: { warnings: false },
};