const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const {isWarning, loadConfig} = require('./utils');

const exec = promisify(require('child_process').exec);

const srcDir = fs.readdirSync(path.join(__dirname, '..'));
const configFilePattern = /config\.js(?:on)?$/;
const jsFilePattern = /\.js$/;
const otherConfigs = srcDir.filter(name => configFilePattern.test(name));
const linterConfigs = srcDir.filter(
  name => jsFilePattern.test(name) && !configFilePattern.test(name),
);

test('index exports recommended config', () => {
  expect(require(path.resolve(__dirname, '..', 'index.js'))).toBe(
    require(path.resolve(__dirname, '..', 'recommended.js')),
  );
});

describe('package contains config files', () => {
  let packagedFiles;
  beforeAll(async () => {
    const {stdout, stderr} = await exec('npm pack --dry-run --json', {
      cwd: path.resolve(__dirname, '..'),
    });
    expect(stdout).toBeTruthy();
    expect(stderr).toBeFalsy();
    const [result] = JSON.parse(stdout);
    packagedFiles = result.files.map(({path}) => path);
  });

  test.each(otherConfigs.concat(linterConfigs))(`%s`, configFile => {
    expect(packagedFiles).toContain(configFile);
  });
});

describe('configs avoid warnings', () => {
  expect.extend({
    toBeWarning([ruleName, ruleSetting]) {
      const pass = isWarning(ruleSetting);
      const message = () =>
        `"${ruleName}": ${this.utils.printReceived(ruleSetting)}`;
      return {message, pass};
    },
  });

  for (const configFile of linterConfigs) {
    const config = loadConfig(configFile);
    const {rules} = config.getConfigForFile('some.js');

    describe(`${configFile}`, () => {
      Object.entries(rules).forEach(rule => {
        test(`${rule[0]}: ${rule[1]}`, () => expect(rule).not.toBeWarning());
      });
    });
  }
});
