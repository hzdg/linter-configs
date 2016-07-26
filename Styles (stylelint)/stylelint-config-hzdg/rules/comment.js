module.exports = {
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'stylelint-commands',
        ],
      },
    ],
    'comment-whitespace-inside': 'always',
  },
};
