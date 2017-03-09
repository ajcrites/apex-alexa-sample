const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./index.es6",
    target: "node",
    output: {
        path: "./lib",
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    externals: [nodeExternals()],
};
