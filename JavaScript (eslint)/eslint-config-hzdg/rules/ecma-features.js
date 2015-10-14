module.exports = {
  env: {
    es6: false,
  },
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: true,
  },
  rules: {
    'arrow-parens': 0,
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 0,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 0,
    'no-var': 2,
    'object-shorthand': 0,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-reflect': 0,
    'prefer-template': 2,
    'require-yield': 0,
  },
};
