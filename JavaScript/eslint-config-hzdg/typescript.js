const jsExts = ['.js', '.jsx'];
const tsExts = ['.ts', '.tsx'];

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    // FIXME: The next version of import plugin will have
    // a typescript config we can use.
    // 'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  // FIXME: The next version of import plugin will have a typescript config
  // that provides these settings, so we can remove them then.
  settings: {
    'import/extensions': jsExts.concat(tsExts),
    'import/parsers': {
      '@typescript-eslint/parser': tsExts,
    },
    'import/resolver': {
      node: {
        extensions: jsExts.concat(tsExts),
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {allowExpressions: true, allowTypedFunctionExpressions: true},
    ],
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
