module.exports = {
  plugins: [
    'react',
  ],
  rules: {
    'react/display-name': [1, {acceptTranspilerName: true}],
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': [1, 'props-aligned'],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-indent-props': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': [2, {ignoreCase: true}],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-quotes': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/prop-types': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/wrap-multilines': 2,
  },
};
