/*
 * Public Alerts
 * For the full copyright and license information, please view the LICENSE.txt file.
 */

/* jslint node: true */
'use strict';

var request = require('request');

// Init the module
module.exports = function() {

  var defTimeout  = 10000,
      defLocation = 'US',
      defRawData  = false,
      searchUrl   = 'http://www.google.org/publicalerts/g/search',
      search;     // search information - function

  search = function search(options, callback) {

    if(typeof callback !== 'function')
      callback = function callback(err, result) { return err || result; };

    if(!options || typeof options !== 'object')
      return callback('Invalid options!');

    if(options.query && typeof options.query !== 'string')
      return callback('Invalid query!');

    if(options.location && typeof options.location !== 'string')
      return callback('Invalid location!');

    if(!options.query && !options.location)
      return callback('Missing query or location!');

    var result,
        timeout   = options.timeout || defTimeout,
        rawData   = options.rawData || defRawData,
        location  = options.location || defLocation,
        searchQry = (options.query ? options.query + ' ' : '') + (location ? 'loc:\\"' + location + '\\"' : ''),
        reqBody   = '{"method": "search", "params": [,[,[,0,0],[,0,0]],11,"en",,"' + searchQry + ' is:active",,,,1,"US",,,1]}',
        reqHdrs   = {
          'Content-Type': 'application/javascript; charset=UTF-8',
          'X-GWT-Module-Base': 'http://www.google.org/publicalerts/',
          'X-GWT-Permutation': '2173D3FDFBC5825A565D4E6B8BF2183F'
        };

    request({method: 'POST', url: searchUrl, headers: reqHdrs, body: reqBody, timeout: timeout}, function(err, res, body) {

      if(err) return callback(err);
      if(res.statusCode !== 200) return callback('Request failed (' + res.statusCode + ')');

        var bodyObj;

        try {
          bodyObj = JSON.parse(body);
        } catch(e) {
          return callback('Response content could not be parsed! (' + e + ')');
        }

        if(bodyObj && bodyObj.error)
          return callback(bodyObj.error.message + ' (' + bodyObj.error.code + ')');

        if(rawData)
          return callback(undefined, bodyObj.result);

        if(!(bodyObj.result instanceof Array) || !bodyObj.result[4])
          return callback(undefined, null);

        result = [];
        for(var i = 0, resultLen = bodyObj.result[4].length; i < resultLen; i++) {
          result.push(bodyObj.result[4][i]);
        }

        return callback(undefined, result);
    });
  };

  // Return
  return {
    search: search
  };
}();