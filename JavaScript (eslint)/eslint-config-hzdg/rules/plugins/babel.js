module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/array-bracket-spacing': ['off', 'never'],
    'babel/arrow-parens': ['off', 'as-needed'],
    'babel/flow-object-type': ['off', 'comma'],
    'babel/func-params-comma-dangle': ['off', 'always-multiline'],
    'babel/generator-star-spacing': ['off', {before: true, after: false}],
    'babel/new-cap': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/no-invalid-this': 'error',
    'babel/object-curly-spacing': ['error', 'never'],
    'babel/object-shorthand': 'off',
    'babel/semi': 'error',
    'babel/quotes': ['off', 'as-needed'],
    'babel/no-unused-expressions': 'error',
  },
};
