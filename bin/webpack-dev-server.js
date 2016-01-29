require('babel/register');

const devServer = require('../build/webpack-dev-server'),
      config    = require('../config');

const port = config.get('webpack_port');
devServer.listen(port, 'localhost', function () {
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
