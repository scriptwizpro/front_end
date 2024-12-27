import { expect } from "chai";
import factorial from '../index.js';

describe ('Factorial function', () => {
    it('should return 120 for 5', () => {
        expect(factorial(5)).to.equal(120);
    });
});