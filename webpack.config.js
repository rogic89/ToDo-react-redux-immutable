const config   = require('./config');
module.exports = require('./build/webpack/' + config.env);
