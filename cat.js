/* eslint-disable func-names */
const fs = require('fs');

function cat(file, done) {
  const path = `${process.cwd()}/${file}`;
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      done(data);
    }
  });
}

module.exports = cat;
