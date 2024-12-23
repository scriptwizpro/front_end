const findMax = require('../src/findMax');

test('maximum in [1, 2, 3] is 3', () => {
    expect(findMax([1, 3, 2])).toBe(3);
    });