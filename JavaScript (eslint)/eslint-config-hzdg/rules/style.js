module.exports = {
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': 2,
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    camelcase: 2,
    'comma-spacing': 2,
    'comma-style': [2, 'last'],
    'computed-property-spacing': 0,
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'func-names': 0,
    'func-style': [0, 'declaration'],
    'id-blacklist': [0, 'data', 'err', 'e', 'cb', 'callback'], /* TODO: Review */
    'id-length': 0,
    'id-match': 0,
    indent: [2, 2, {SwitchCase: 1}],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'keyword-spacing': 2,
    'lines-around-comment': 0,
    'linebreak-style': [0, 'unix'],
    'max-nested-callbacks': [0, 2],
    'new-cap': [2, {newIsCap: true, capIsNew: false}],
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-before-return': 0, /* TODO: Review */
    'newline-per-chained-call': 0, /* TODO: Review */
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 0,
    'no-mixed-operators': 2,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-multiple-empty-lines': [0, {max: 2}],
    'no-nested-ternary': 0,
    'no-negated-condition': 2,
    'no-new-object': 2,
    'no-restricted-syntax': 0,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 1,
    'no-unneeded-ternary': 0,
    'no-whitespace-before-property': 2,
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'one-var': 0,
    'one-var-declaration-per-line': [0, 'always'], /* TODO: Review */
    'operator-assignment': [0, 'always'],
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', 'avoid-escape'],
    'require-jsdoc': 0,
    semi: 2,
    'semi-spacing': [2, {before: false, after: true}],
    'sort-vars': 0,
    'sort-imports': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'spaced-comment': [2, 'always'],
    'unicode-bom': [0, 'never'],
    'wrap-regex': 0,
  },
};