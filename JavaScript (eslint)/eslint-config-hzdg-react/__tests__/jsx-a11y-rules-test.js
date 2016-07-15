import test from 'ava';
import {rules as availableRules} from 'eslint-plugin-jsx-a11y';
import {rules as definedRules} from '../rules/jsx-a11y';
import rulesTest, {removePluginName} from './utils';


test(rulesTest(availableRules, removePluginName(definedRules)));
