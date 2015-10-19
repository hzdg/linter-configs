import fs from 'fs';
import path from 'path';
import {expect} from 'chai';
import {rules as eslintRules} from 'eslint/conf/eslint';

let hzRules = {};
fs.readdirSync(path.join(__dirname, '..', 'rules')).forEach(name => {
  if (name === 'react.js' || name === 'babel.js') return;
  const {rules} = require(`../rules/${name}`);
  hzRules = Object.assign(hzRules, rules);
});

const deprecatedRules = [];
for (const rule in hzRules) {
  if (!eslintRules.hasOwnProperty(rule)) deprecatedRules.push(rule);
}

const missingRules = [];
for (const rule in eslintRules) {
  if (!hzRules.hasOwnProperty(rule)) missingRules.push(rule);
}

describe('HZ ESLint Rules (ESLint)', () => {

  it('should not have extraneous or deprecated rules', done => {
    expect(deprecatedRules.length, deprecatedRules).to.equal(0);
    done();
  });

  it('should not be missing rules', done => {
    expect(missingRules.length, missingRules).to.equal(0);
    done();
  });

});
