/* eslint-disable global-require */

require('babel-register')({
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-0'),
  ],
  plugins: [
    require('babel-plugin-transform-object-assign'),
  ],
});
