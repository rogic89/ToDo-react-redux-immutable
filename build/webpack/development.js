import webpackConfig from './_base';

webpackConfig.devtool = 'cheap-module-eval-source-map';
webpackConfig.eslint.emitWarning = true;

export default webpackConfig;
