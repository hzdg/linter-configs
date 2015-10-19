import {rules as hzReactRules} from '../rules/react';
import {rules as reactRules} from 'eslint-plugin-react';
import assert from 'power-assert';


const deprecatedRules = [];
for (const rule in hzReactRules) {
  if (!reactRules.hasOwnProperty(rule.replace('react/', ''))) deprecatedRules.push(rule);
}

const missingRules = [];
for (const rule in reactRules) {
  if (!hzReactRules.hasOwnProperty(`react/${rule}`)) missingRules.push(rule);
}

describe('HZ ESLint Rules (React)', () => {

  it('should not have extraneous or deprecated rules', done => {
    assert(deprecatedRules.length === 0, `Deprecated Rule(s): ${deprecatedRules}`);
    done();
  });

  it('should not be missing rules', done => {
    assert(missingRules.length === 0, `Missing Rule(s): ${missingRules}`);
    done();
  });

});
