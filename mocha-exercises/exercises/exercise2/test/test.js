import { expect } from 'chai';
import { reverseString } from '../index.js';

describe('Reverse String Function', () => {
  it('should reverse a string "hello" to "olleh"', () => {
    expect(reverseString('hello')).to.equal('olleh');
  });
});