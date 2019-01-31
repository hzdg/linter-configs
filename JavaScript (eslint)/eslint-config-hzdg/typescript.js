const jsExts = ['.js', '.jsx'];
const tsExts = ['.ts', '.tsx'];

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': jsExts.concat(tsExts),
    'import/parsers': {
      '@typescript-eslint/parser': tsExts,
    },
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
  overrides: [
    {
      files: jsExts.map(ext => `**/*${ext}`),
      rules: {
        camelcase: 'error',
        '@typescript-eslint/camelcase': 'off',
        'no-array-constructor': 'error',
        '@typescript-eslint/no-array-constructor': 'off',
        'no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
