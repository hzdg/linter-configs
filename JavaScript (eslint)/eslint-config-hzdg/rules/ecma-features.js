module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': 0,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 0,
    'generator-star-spacing': 0,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 2,
    'no-this-before-super': 0,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-property-newline': [2, {allowMultiplePropertiesPerLine: true}],
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-reflect': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 0,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'before'],
  },
};
