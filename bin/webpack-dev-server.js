var devServer = require('../build/webpack-dev-server'),
      config    = require('../config');

var port = config.webpack_port;
devServer.listen(port, 'localhost', function () {
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
