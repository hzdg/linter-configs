import {rules as definedRules} from '../rules/plugins/react';
import {rules as availableRules} from 'eslint-plugin-react';
import runTest from './utils/run-test';
import removePluginName from './utils/remove-plugin-name';


describe('HZ ESLint Rules (react)', () => runTest(availableRules, removePluginName(definedRules)));
