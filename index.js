'use strict';

var debug = require('debug')('plugin:portoverride');

module.exports.init = function(config, logger, stats) {

  var port = process.env.TARGET_PORT || config['target_port']	|| "8090";

  return {
   onrequest: function(req, res, next) {
   	  debug ("ENV: " + process.env.TARGET_PORT);
   	  debug ("config: " + config['target_port']);
   	  req.targetPort = port;
   	  next();
    }
  }
}

