const fs = require('fs');
const path = require('path');
const {otherConfigs, linterConfigs} = require('./utils');

const readme = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf8');
const extPattern = /.[^.]+$/;

describe('configs are mentioned in the README', () => {
  test.each(linterConfigs)('%s', configFile => {
    const name = path.basename(configFile).replace(extPattern, '');
    if (name.includes('index')) {
      expect(readme).toMatch(`"hzdg"`);
    } else {
      expect(readme).toMatch(`"hzdg/${name}"`);
    }
  });
});

describe('extra-linter configs are mentioned in the README', () => {
  test.each(otherConfigs)('%s', configFile => {
    const name = path.basename(configFile).replace(extPattern, '');
    expect(readme).toMatch(`eslint-config-hzdg/${name}`);
  });
});
