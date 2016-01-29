process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path     from 'path';
import { argv } from 'yargs';

const config = new Map();

// ------------------------------------
// User Configuration
// ------------------------------------
config.set('cache', false);
config.set('dir_src',  'src');
config.set('dir_dist', 'dist');

config.set('webpack_host',  'localhost');
config.set('webpack_port', process.env.PORT || 3000);

config.set('vendor_dependencies', [
  'react',
  'react-redux',
  'redux',
  'redux-devtools',
  'redux-devtools/lib/react'
]);

/*  *********************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/
// ------------------------------------
// Environment
// ------------------------------------
config.set('env', process.env.NODE_ENV);
config.set('globals', {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.get('env'))
  },
  'NODE_ENV'     : config.get('env'),
  '__DEV__'      : config.get('env') === 'development',
});

// ------------------------------------
// Webpack
// ------------------------------------
config.set('webpack_public_path',
  `http://${config.get('webpack_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '../'));

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base    = [config.get('path_project')],
        resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.get('dir_src')),
    dist    : project.bind(null, config.get('dir_dist'))
  };
})();

config.set('utils_paths', paths);
config.set('utils_aliases', [
  'actions',
  'components',
  'constants',
  'reducers',
  'styles',
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {}));

export default config;
