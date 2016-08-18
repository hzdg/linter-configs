module.exports = {
  plugins: [
    'react',
  ],
  rules: {
    'react/display-name': [1, {ignoreTranspilerName: false}],
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [0, 'props-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-handler-names': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': [2, {ignoreCase: true}],
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-space-before-closing': [2, 'always'], /* TODO: Review */
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 2,
    'react/no-comment-textnodes': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-render-return-value': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/require-optimization': 0, /* TODO: Review */
    'react/require-render-return': 2,
    'react/prop-types': 2,
    'react/self-closing-comp': 2,
    'react/sort-prop-types': 0,
    'react/sort-comp': 2,
    'react/wrap-multilines': 2,
  },
};
