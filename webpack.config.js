const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname + '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname + '/public/dist'),
    publicPath: '/'
  }
};