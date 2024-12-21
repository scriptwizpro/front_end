const isEven = require('../src/isEven');

test('checks if 4 is even', () => {
    expect(isEven(4)).toBe(true);
});

test('checks if 5 is even', () => {
    expect(isEven(5)).toBe(false);
});