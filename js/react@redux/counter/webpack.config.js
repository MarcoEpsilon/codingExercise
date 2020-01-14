const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        }
                    }
                ]
            }
        ]
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        port: 16000,
        open: true,
    }
}