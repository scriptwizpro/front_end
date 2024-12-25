const removeDuplicates = require('../src/removeDuplicates');

test('removeDuplicates from [1, 2, 2, 3]', () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
});