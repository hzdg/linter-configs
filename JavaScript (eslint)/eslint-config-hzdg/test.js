import babel from './rules/babel';
import bestPractices from './rules/best-practices';
import ecmaFeatures from './rules/ecma-features';
import legacy from './rules/legacy';
import node from './rules/node';
import possibleErrors from './rules/possible-errors';
import react from './rules/react';
import strict from './rules/strict';
import style from './rules/style';
import variables from './rules/variables';
import {rules as defaultRules} from 'eslint/conf/eslint';

let hzRules = Object.assign(
  // babel.rules,
  bestPractices.rules,
  ecmaFeatures.rules,
  legacy.rules,
  node.rules,
  possibleErrors.rules,
  // react.rules,
  strict.rules,
  style.rules,
  variables.rules
);

hzRules = Array.sort(Object.keys(hzRules));
const eslintRules = Array.sort(Object.keys(defaultRules));

// console.log(hzRules)
// console.log(eslintRules);
console.log(hzRules.length, 'hz rules');
console.log(eslintRules.length, 'eslint rules');

hzRules.forEach(hzRule => {
  const index = eslintRules.indexOf(hzRule);
  if (index !== -1) eslintRules.splice(index, 1);
});
console.log(eslintRules, ' not defined.');
