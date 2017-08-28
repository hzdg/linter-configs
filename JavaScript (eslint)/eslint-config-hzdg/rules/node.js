module.exports = {
  env: {
    node: true,
  },
  rules: {
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-exit': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
  },
};
