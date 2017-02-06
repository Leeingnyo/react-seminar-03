const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../src'),

  entry: {
    app: '../src/app.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  devtool: 'source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: './public',
    host: '0.0.0.0', // 'localhost',
    port: 12345,
    historyApiFallback: true,
  }
};
