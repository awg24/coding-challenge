var webpack = require("webpack");

module.exports = {
  devtool: 'inline-source-map',
  entry : "./public/scripts/main.js",
  output: {
  		filename: "./public/scripts/bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=react']
      }
    ]
  }
};
