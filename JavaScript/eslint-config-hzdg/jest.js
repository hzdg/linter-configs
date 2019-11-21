module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/expect-expect': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-jasmine-globals': 'error',
  },
};
