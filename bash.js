const VSISSTUPID = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd + '\n');
  if (cmd === 'pwd') {
    VSISSTUPID();
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    const file = cmd.slice(4);
    cat(file, done);
  } else if (cmd.includes('http')){
    const file = cmd.slice(5);
    curl(file);
  }
   else {
    process.stdout.write('\nprompt > ');
  }
});

function done(output){
  process.stdout.write(output);
      process.stdout.write('\nprompt > ');
}
