module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    'babel/array-bracket-spacing': [0, 'never'],
    'babel/arrow-parens': [0, 'as-needed'],
    'babel/flow-object-type': [0, 'comma'],
    'babel/func-params-comma-dangle': [0, 'always-multiline'],
    'babel/generator-star-spacing': [0, {before: true, after: false}],
    'babel/new-cap': 0,
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': [2, 'never'],
    'babel/object-shorthand': 0,
  },
};
