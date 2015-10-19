import {rules as hzBabelRules} from '../rules/babel';
import {rules as babelRules} from 'eslint-plugin-babel';
import assert from 'power-assert';


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
    assert(deprecatedRules.length === 0, `Deprecated Rule(s): ${deprecatedRules}`);
    done();
  });

  it('should not be missing rules', done => {
    assert(missingRules.length === 0, `Missing Rule(s): ${missingRules}`);
    done();
  });

});
