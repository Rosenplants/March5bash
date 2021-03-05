/* eslint-disable func-names */
const pwdCommand = function () {
  console.log(process.cwd());
  process.stdout.write('\nprompt > ');
};

module.exports = pwdCommand;
