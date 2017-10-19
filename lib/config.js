'use strict';

var nconf = require('nconf');

// Default configuration.
nconf.use('memory').defaults({
    api: 'api.stackexchange.com'
  , protocol: 'https:'
  , site: 'movies.stackexchange'
  , version: 2.2
});

// Expose config
module.exports = nconf;
