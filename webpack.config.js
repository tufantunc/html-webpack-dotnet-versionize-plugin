const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackDotnetVersionizePlugin = require('./index');

module.exports = {
  mode: 'development',
  entry: {
    main: './test/src/main.js',
  },
  output: {
    path: path.join(__dirname, '/test/dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, './test/index.html'),      
      minify: false,
    }),
    new HtmlWebpackDotnetVersionizePlugin()
  ],
};