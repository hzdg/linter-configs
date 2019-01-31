const path = require('path');
test('index exports recommended config', () => {
  expect(require(path.resolve(__dirname, '..', 'index.js'))).toBe(
    require(path.resolve(__dirname, '..', 'recommended.js')),
  );
});

