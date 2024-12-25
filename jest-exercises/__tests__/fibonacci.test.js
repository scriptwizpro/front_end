const fibonacci = require('../src/fibonacci');

test('fibonacci of 6 is 8', () => {
  expect(fibonacci(6)).toBe(8);
});