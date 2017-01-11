module.exports = {
  extends: [
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  rules: {

    'class-methods-use-this': [2, {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    }],

  },
};
