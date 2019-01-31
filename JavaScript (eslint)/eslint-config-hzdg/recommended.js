module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': 'off',
    'jest/no-alias-methods': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-jasmine-globals': 'error',
  },
};
