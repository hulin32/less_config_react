const path = require('path');
const ROOT = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(ROOT, '/public'),
    filename: 'assets/js/bundle.js',
    publicPath: '/',
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
