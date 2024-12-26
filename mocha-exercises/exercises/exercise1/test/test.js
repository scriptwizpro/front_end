import { sum } from '../index.js';
import { expect } from 'chai';

describe('Sum Function', () => {
    it('should return 5 when adding 2 and 3', () => {
        expect(sum(2, 3)).to.equal(5);
    });
});