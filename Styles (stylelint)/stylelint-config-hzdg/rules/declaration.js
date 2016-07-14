module.exports = {
  rules: {
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-property-value-blacklist': {
      '/^transition/': [
        '/all/',
      ],
      '/^background/': [
        'http:',
        'https:',
      ],
      '/^border/': [
        'none',
      ],
      '/.+/': [
        'initial',
      ],
    },
  },
};
