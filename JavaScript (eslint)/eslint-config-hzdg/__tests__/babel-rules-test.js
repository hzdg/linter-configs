/* eslint-env jest */
import {rules as availableRules} from 'eslint-plugin-babel';
import {rules as definedRules} from '../rules/plugins/babel';
import './utils';

test.each(Object.keys(definedRules))('defined rule: %s', rule => {
  expect(availableRules).toHaveDefinableRule(rule.split('/').pop(), rule);
});

test.each(Object.keys(availableRules))('available rule: babel/%s', rule => {
  expect(definedRules).toHaveDefinedRule(`babel/${rule}`);
});
