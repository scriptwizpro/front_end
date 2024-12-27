import { expect } from 'chai';
import { isPrime } from '../index.js';

describe('Prime Number Checker', () => {
    it('should return true for 7', () => {
        expect(isPrime(7)).to.be.true;
    });
});