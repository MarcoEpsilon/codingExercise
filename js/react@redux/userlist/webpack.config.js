let path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: path.resolve(__dirname, "src"),
                exclude: path.resolve(__dirname, "dist"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
        hot: true,
        port: 8080
    },
    performance: {
        hints: false
    }
};