var webpackConfig =  require('./_base');

webpackConfig.devtool = '#cheap-module-eval-source-map';
webpackConfig.eslint.emitWarning = true;

module.exports = webpackConfig;
