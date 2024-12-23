const isPalindrome = require('../src/isPalindrome');

test('"madam" is a palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});

test('"hello" is not a palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});