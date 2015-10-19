/* eslint-disable  global-require */
import fs from 'fs';
import path from 'path';
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

console.log(`${hzRules.length} hz rules`);
console.log(`${eslintRules.length} eslint rules`);

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

console.log(`${deprecatedRules} rules deprecated`);
console.log(`${newRules} new rules`);
