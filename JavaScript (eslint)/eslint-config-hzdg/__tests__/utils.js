const fs = require('fs');
const path = require('path');
const {CLIEngine} = require('eslint');

const srcDir = fs.readdirSync(path.join(__dirname, '..'));
const configFilePattern = /config\.js(?:on)?$/;
const jsFilePattern = /\.js$/;

exports.otherConfigs = srcDir.filter(name => configFilePattern.test(name));

exports.linterConfigs = srcDir.filter(
  name => jsFilePattern.test(name) && !configFilePattern.test(name),
);

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
