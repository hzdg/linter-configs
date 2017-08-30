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
    'eslint-config-prettier',
  ].map(require.resolve),
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: false,
        parser: 'babylon',
      },
    ],
  },
};
