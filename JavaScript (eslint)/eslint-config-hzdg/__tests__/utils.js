const path = require('path');
const {CLIEngine} = require('eslint');

exports.isWarning = function isWarning(ruleSetting) {
  let pass = false;
  if (typeof ruleSetting === 'number') {
    pass = ruleSetting === 1;
  } else if (typeof ruleSetting === 'string') {
    pass = ruleSetting === 'warn';
  } else {
    pass = Array.isArray(ruleSetting) && isWarning(ruleSetting[0]);
  }
  return pass;
};

exports.loadConfig = configFile =>
  new CLIEngine({
    useEslintrc: false,
    configFile: path.resolve(__dirname, '..', configFile),
  });
