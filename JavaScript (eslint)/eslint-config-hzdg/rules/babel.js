module.exports = {
  plugins: [
    'babel',
  ],
  rules: {
    'babel/arrow-parens': [2, 'as-needed'],
    'babel/generator-star-spacing': [2, {before: true, after: false}],
    'babel/new-cap': 0,
    'babel/object-curly-spacing': [2, 'never'],
    'babel/object-shorthand': 0,
  },
};
