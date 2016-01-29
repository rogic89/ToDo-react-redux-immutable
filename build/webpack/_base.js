import webpack           from 'webpack';
import config            from '../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const cache = config.get('cache');
const paths = config.get('utils_paths');

const filename = cache ? '[name].[hash].js' : '[name].js';

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  entry   : {
    app : [
      paths.project(config.get('dir_src')) + '/init.js',
    ],
    vendor : config.get('vendor_dependencies')
  },
  output : {
    filename   : filename,
    path       : paths.project(config.get('dir_dist')),
    publicPath : '/'
  },
  plugins : [
    new webpack.DefinePlugin(config.get('globals')),
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
    alias      : config.get('utils_aliases')
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
        loader  : 'babel',
        query   : {
          stage    : 0,
          optional : ['runtime'],
          env      : {
            development : {
              plugins : ['react-transform'],
              extra   : {
                'react-transform' : {
                  transforms : [{
                    transform : 'react-transform-catch-errors',
                    imports   : ['react', 'redbox-react']
                  }]
                }
              }
            }
          }
        }
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

export default webpackConfig;
