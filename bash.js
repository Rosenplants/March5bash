const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

function done(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  let arg;
  process.stdout.write(`You typed: ${cmd}\n`);
  if (cmd.includes(' ')) {
    const all = cmd.split(' ');
    [cmd, arg] = all;
  }
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd === 'cat') {
    cat(arg, done);
  } else if (cmd === 'curl') {
    curl(arg, done);
  } else {
    process.stdout.write('\nprompt > ');
  }
});
