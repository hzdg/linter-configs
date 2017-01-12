import test from 'ava';
import fs from 'fs';
import path from 'path';
import {rules as eslintRules} from 'eslint/conf/eslint';
import rulesTest from './utils';


let definedRules = {};
fs.readdirSync(path.join(__dirname, '..', 'rules'))
  .filter(name => name !== 'plugins')
  .forEach(name => {
    // eslint-disable-next-line global-require
    const {rules} = require(`../rules/${name}`);
    definedRules = Object.assign({}, definedRules, rules);
  });

test(rulesTest(eslintRules, definedRules));
