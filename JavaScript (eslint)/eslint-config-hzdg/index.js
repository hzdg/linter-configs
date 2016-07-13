module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ecma-features',
    './rules/legacy',
    './rules/node',
    './rules/plugins/babel',
    './rules/possible-errors',
    './rules/strict',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {},
};
