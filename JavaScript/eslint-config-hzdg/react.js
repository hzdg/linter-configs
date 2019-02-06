module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/react',
    'plugin:react-hooks',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{name: 'Link', linkAttribute: 'to'}],
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
  },
};
