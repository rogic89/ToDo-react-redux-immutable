var webpack =           require ('webpack');
var config =            require ('../../config');
var HtmlWebpackPlugin = require ('html-webpack-plugin');

var cache = config.cache;
var paths = config.utils_paths;

var filename = cache ? '[name].[hash].js' : '[name].js';

var webpackConfig = {
  name    : 'client',
  target  : 'web',
  entry   : {
    app : [
      paths.project(config.dir_src) + '/init.js',
    ],
    vendor : config.vendor_dependencies
  },
  output : {
    filename   : filename,
    path       : paths.project(config.dir_dist),
    publicPath : '/'
  },
  plugins : [
    new webpack.DefinePlugin(config.globals),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : cache,
      filename : 'index.html',
      inject   : 'body'
    })
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias      : config.utils_aliases
  },
  module : {
    preLoaders : [
      {
        test : /\.(js|jsx)$/,
        loaders : ['eslint-loader'],
        exclude : /node_modules/
      }
    ],
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel-loader'
      },
      {
        test    : /\.scss$/,
        loaders : [
          'style-loader',
          'css-loader',
          'sass-loader?includePaths[]=' + paths.src('styles')
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.(png|jpg)$/, loader : 'url-loader?limit=8192' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' }
    ]
  },
  eslint : {
    configFile : paths.project('.eslintrc')
  }
};

module.exports = webpackConfig;
