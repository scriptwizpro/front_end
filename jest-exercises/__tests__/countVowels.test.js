const countVowels = require('../src/countVowels');

test('vowels in "hello" are 2', () => {
    expect(countVowels('hello')).toBe(2);
});