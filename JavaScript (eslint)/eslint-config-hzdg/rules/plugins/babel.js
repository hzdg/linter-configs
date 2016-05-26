module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    'babel/array-bracket-spacing': [2, 'never'],
    'babel/arrow-parens': [2, 'as-needed'],
    'babel/flow-object-type': [2, 'comma'],
    'babel/generator-star-spacing': [2, {before: true, after: false}],
    'babel/new-cap': 0,
    'babel/no-await-in-loop': 2,
    'babel/object-curly-spacing': [2, 'never'],
    'babel/object-shorthand': 0,
  },
};
