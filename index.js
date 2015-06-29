/**
 * index.js
 * Date: 29.06.15
 * Vitaliy V. Makeev (w.makeev@gmail.com)
 */

var _ = require('lodash');

module.exports = function (sandbox) {
  var log = sandbox.log;

  return {

    init: function (options) {
      taistApi.log('Example module init');
      log('Example module options:', options);
      log('Example use lodash@', _.VERSION);
      sandbox.emit('alert', 'I am Ok!');
    }

  }
};