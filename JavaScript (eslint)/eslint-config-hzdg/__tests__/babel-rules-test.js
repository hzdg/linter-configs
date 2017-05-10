import test from 'ava';
import {rules as availableRules} from 'eslint-plugin-babel';
import {rules as definedRules} from '../rules/plugins/babel';
import rulesTest, {removePluginName} from './utils';

test(rulesTest(availableRules, removePluginName(definedRules)));
