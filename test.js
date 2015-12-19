import { expect } from 'chai';
import isset from './';

const errorObject = { 'module': 'isset', 'message': 'This field is required.' };

describe('isset', () => {
  it('should return true', () => {
    expect(isset('Hello')).to.be.true;
    expect(isset(1)).to.be.true;
    expect(isset(2.50)).to.be.true;
    expect(isset(true)).to.be.true;
    expect(isset([1])).to.be.true;
  });

  it('should return false', () => {
    expect(isset('')).to.eql(errorObject);
    expect(isset()).to.eql(errorObject);
    expect(isset(null)).to.eql(errorObject);
    expect(isset(undefined)).to.eql(errorObject);
    expect(isset([])).to.eql(errorObject);
  });
});
