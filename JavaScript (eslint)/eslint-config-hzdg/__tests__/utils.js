/* eslint-env jest */
expect.extend({
  toHaveDefinableRule(ruleSet, key, rule = key) {
    const pass = {}.hasOwnProperty.call(ruleSet, key);
    if (pass) {
      return {
        message: () => `expected ${rule} not to be definable`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${rule} to be definable`,
        pass: false,
      };
    }
  },
  toHaveDefinedRule(ruleSet, key, rule = key) {
    const pass = {}.hasOwnProperty.call(ruleSet, key);
    if (pass) {
      return {
        message: () => `expected ${rule} not to be defined`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${rule} to be defined`,
        pass: false,
      };
    }
  },
});
