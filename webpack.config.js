const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname + '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname + '/public/dist'),
    publicPath: '/'
  }
};