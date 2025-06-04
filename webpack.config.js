// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        watchFiles: {
            paths: ['src/index.html', 'src/index.js', 'src/classes.js', 'src/domAction.js', 'src/style.css'],
            options: {
                usePolling: false,
            },
        },
        compress: true,
        port: 9000,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            title: 'Battleship',
            filename: 'index.html',
            inject: 'body'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
