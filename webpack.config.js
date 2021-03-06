var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/main.js',
  output: { path: __dirname + '/app', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
     //  proxy: {
     //    '/': {
     //      target: 'localhost:9292',
     //      secure: false
     //    }
     // }
  }
};
