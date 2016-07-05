import {rules as availableRules} from 'eslint-plugin-babel';
import {rules as definedRules} from '../rules/plugins/babel';
import runTest from './utils/run-test';
import removePluginName from './utils/remove-plugin-name';


describe('HZ ESLint Rules (Babel)', () => runTest(availableRules, removePluginName(definedRules)));
