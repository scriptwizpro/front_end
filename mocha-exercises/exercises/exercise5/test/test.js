import fizzBuzz from '../index.js';
import { expect } from 'chai';

describe('FizzBuzz Function', () => {
    it('should return "FizzBuzz" for 15', () => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
    });
    it('should return "Fizz" for 3', () => {
        expect(fizzBuzz(3)).to.equal('Fizz');
    });
    it('should return "Buzz" for 5', () => {
        expect(fizzBuzz(5)).to.equal('Buzz');
    });
    it('should return 7 for 7', () => {
        expect(fizzBuzz(7)).to.equal(7);
    });
});