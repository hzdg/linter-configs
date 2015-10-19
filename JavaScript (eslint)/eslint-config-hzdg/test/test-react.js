import {rules as hzReactRules} from '../rules/react';
import {rules as reactRules} from 'eslint-plugin-react';
import {expect} from 'chai';


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
    expect(deprecatedRules.length, deprecatedRules).to.equal(0);
    done();
  });

  it('should not be missing rules', done => {
    expect(missingRules.length, missingRules).to.equal(0);
    done();
  });

});
