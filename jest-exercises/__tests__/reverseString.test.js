const reverseString = require('../src/reverseString');

test('reverses "hello" to "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});