import { expect } from 'chai';
import isset from './';

describe('isset', () => {
  it('should return true', () => {
    expect(isset('Hello')).to.be.true;
    expect(isset(1)).to.be.true;
    expect(isset(2.50)).to.be.true;
    expect(isset(true)).to.be.true;
    expect(isset([1])).to.be.true;
  });

  it('should return false', () => {
    expect(isset('')).to.be.false;
    expect(isset('   ')).to.be.false;
    expect(isset()).to.be.false;
    expect(isset(null)).to.be.false;
    expect(isset(undefined)).to.be.false
  });
});
