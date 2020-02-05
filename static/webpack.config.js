const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: [ path.join(__dirname, '/js/main.ts'), path.join(__dirname, '/scss/main.scss') ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "json"]
    },
};

// npm install --save-dev webpack
// npm install --save-dev webpack-cli webpack-dev-server
// npm install --save-dev ts-loader
// npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
// npm start


// npm install --global --production windows-build-tools