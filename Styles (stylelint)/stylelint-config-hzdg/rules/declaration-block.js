module.exports = {
  rules: {
    'declaration-block-no-duplicate-properties': [true,
      {
        ignore: [
          'consecutive-duplicates',
        ],
      },
    ],
    'declaration-block-no-ignored-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
  },
};
