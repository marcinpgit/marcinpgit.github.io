const path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: './dist/bundle.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};