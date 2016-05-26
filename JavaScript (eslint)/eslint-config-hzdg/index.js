module.exports = {
  extends: [
    'eslint-config-hzdg/rules/plugins/babel',
    'eslint-config-hzdg/rules/best-practices',
    'eslint-config-hzdg/rules/ecma-features',
    'eslint-config-hzdg/rules/legacy',
    'eslint-config-hzdg/rules/node',
    'eslint-config-hzdg/rules/possible-errors',
    'eslint-config-hzdg/rules/plugins/react',
    'eslint-config-hzdg/rules/strict',
    'eslint-config-hzdg/rules/style',
    'eslint-config-hzdg/rules/variables',
  ],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {},
};
