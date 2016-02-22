var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../config');
var webpackConfig = require('./webpack/development_hot');

var paths = config.utils_paths;

var server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : paths.project(config.dir_src),
  hot    : true,
  quiet  : false,
  noInfo : false,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

module.exports = server;
