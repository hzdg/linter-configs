import {rules as hzBabelRules} from '../rules/babel';
import {rules as babelRules} from 'eslint-plugin-babel';
import {expect} from 'chai';


const deprecatedRules = [];
for (const rule in hzBabelRules) {
  if (!babelRules.hasOwnProperty(rule.replace('babel/', ''))) deprecatedRules.push(rule);
}

const missingRules = [];
for (const rule in babelRules) {
  if (!hzBabelRules.hasOwnProperty(`babel/${rule}`)) missingRules.push(rule);
}

describe('HZ ESLint Rules (Babel)', () => {

  it('should not have extraneous or deprecated rules', done => {
    expect(deprecatedRules.length, deprecatedRules).to.equal(0);
    done();
  });

  it('should not be missing rules', done => {
    expect(missingRules.length, missingRules).to.equal(0);
    done();
  });

});
