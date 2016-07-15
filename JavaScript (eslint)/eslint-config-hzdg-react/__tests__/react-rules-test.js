import test from 'ava';
import {rules as definedRules} from '../rules/react';
import {rules as availableRules} from 'eslint-plugin-react';
import rulesTest, {removePluginName} from './utils';


test(rulesTest(availableRules, removePluginName(definedRules)));
