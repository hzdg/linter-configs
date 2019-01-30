/* eslint-env jest */
import fs from 'fs';
import path from 'path';
import {rules as availableRules} from 'eslint/conf/eslint-all';
import './utils';

const definedRules = fs
  .readdirSync(path.join(__dirname, '..', 'rules'))
  .filter(name => name !== 'plugins')
  .reduce(
    // eslint-disable-next-line global-require
    (rules, name) => ({...rules, ...require(`../rules/${name}`).rules}),
    {},
  );

test.each(Object.keys(definedRules))('defined rule: %s', rule => {
  expect(availableRules).toHaveDefinableRule(rule);
});

test.each(Object.keys(availableRules))('available rule: %s', rule => {
  expect(definedRules).toHaveDefinedRule(rule);
});
