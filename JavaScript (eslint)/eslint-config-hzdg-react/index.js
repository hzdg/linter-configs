module.exports = {
  extends: [
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
