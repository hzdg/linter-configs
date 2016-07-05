import {rules as availableRules} from 'eslint-plugin-jsx-a11y';
import {rules as definedRules} from '../rules/plugins/jsx-a11y';
import runTest from './utils/run-test';
import removePluginName from './utils/remove-plugin-name';


describe('HZ ESLint Rules (jsx-a11y)', () => runTest(availableRules, removePluginName(definedRules)));
