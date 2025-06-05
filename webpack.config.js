const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Battleship',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: {
            paths: ['src/index.html', 'src/index.js', 'src/style.css', 'src/domAction.js', 'src/classes.js'],
            options: {
                usePolling: false,
            },
        },
        compress: true,
        port: 9000,
    },
};