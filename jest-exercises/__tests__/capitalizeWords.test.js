const capitalizeWords = require('../src/capitalizeWords');

test('capitalize words in "hello world"', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});