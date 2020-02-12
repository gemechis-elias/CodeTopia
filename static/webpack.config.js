const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

// npm install --save-dev webpack
// npm install --save-dev webpack-cli webpack-dev-server
// npm install --save-dev ts-loader
// npm install --save-dev node-sass sass-loader style-loader css-loader mini-css-extract-plugin
// npm start


// npm install --global --production windows-build-tools