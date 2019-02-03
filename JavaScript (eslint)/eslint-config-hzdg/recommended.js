module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
  ],
  parserOptions: {
    ecmaVersion: new Date().getFullYear(),
    sourceType: 'module',
  },
  rules: {
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': 'off',
  },
};
