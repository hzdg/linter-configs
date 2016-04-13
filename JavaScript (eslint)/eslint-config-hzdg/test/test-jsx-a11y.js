import {rules as hzJSXA11yRules} from '../rules/jsx-a11y';
import {rules as jsxA11yRules} from 'eslint-plugin-jsx-a11y';
import assert from 'power-assert';


const deprecatedRules = [];
for (const rule in hzJSXA11yRules) {
  if (!jsxA11yRules.hasOwnProperty(rule.replace('jsx-a11y/', ''))) deprecatedRules.push(rule);
}

const missingRules = [];
for (const rule in jsxA11yRules) {
  if (!hzJSXA11yRules.hasOwnProperty(`jsx-a11y/${rule}`)) missingRules.push(rule);
}

describe('HZ ESLint Rules (jsx a11y)', () => {

  it('should not have extraneous or deprecated rules', done => {
    assert(deprecatedRules.length === 0, `Deprecated Rule(s): ${deprecatedRules}`);
    done();
  });

  it('should not be missing rules', done => {
    assert(missingRules.length === 0, `Missing Rule(s): ${missingRules}`);
    done();
  });

});
