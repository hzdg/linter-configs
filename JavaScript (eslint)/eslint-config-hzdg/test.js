/* eslint-disable  global-require */
import fs from 'fs';
import path from 'path';
import chai, {expect} from 'chai';
import {rules as defaultRules} from 'eslint/conf/eslint';


const files = {};

fs.readdirSync(path.join(__dirname, 'rules')).forEach(name => {
  if (name === 'react.js' || name === 'babel.js') {
    return;
  }

  files[name] = require(`./rules/${name}`);
});


let hzRules = [];
Object.keys(files).forEach(name => {
  hzRules.push(...Object.keys(files[name].rules));
});

hzRules = Array.sort(hzRules);
const eslintRules = Array.sort(Object.keys(defaultRules));


let deprecatedRules = [], newRules = [];
hzRules.forEach(hzRule => {
  const index = eslintRules.indexOf(hzRule);
  if (index === -1) {
    deprecatedRules.push(hzRule);
  }
});

eslintRules.forEach(eslintRule => {
  const index = hzRules.indexOf(eslintRule);
  if (index === -1) {
    newRules.push(eslintRule);
  }
});

describe('HZ Linter Rules', () => {

  it('should have no deprecated rules', (done) => {
    expect(deprecatedRules.length, deprecatedRules).to.equal(0);
    done();
  });

  it('should have no new rules', (done) => {
    expect(newRules.length, newRules).to.equal(0);
    done();
  });

});
