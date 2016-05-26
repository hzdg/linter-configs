import fs from 'fs';
import path from 'path';
import {rules as eslintRules} from 'eslint/conf/eslint';
import runTest from './utils/run-test';


let definedRules = {};
fs.readdirSync(path.join(__dirname, '..', 'rules'))
  .filter(name => name !== 'plugins')
  .forEach(name => {
    const {rules} = require(`../rules/${name}`);
    definedRules = Object.assign(definedRules, rules);
  });

describe('HZ ESLint Rules (ESLint)', () => runTest(eslintRules, definedRules));
