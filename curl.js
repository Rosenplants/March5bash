const request = require('request');

function curl(url, done) {
  request(url, (error, _response, body) => {
    if (error) {
      throw error;
    }
    done(body);
  });
}

module.exports = curl;
