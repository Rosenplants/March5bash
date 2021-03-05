/* eslint-disable func-names */
const fs = require('fs');

function cat(file) {
  const path = process.cwd() + '/' + file;
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
  process.stdout.write('\nprompt > ');
}

module.exports = cat;
