module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/react',
    'prettier/react',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [{name: 'Link', linkAttribute: 'to'}],
  },
};
