const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.6)).to.equal(6);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('should return 0', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
  });
  describe('type == "DIVIDE"', () => {
    it('should return Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return 1', () => {
      expect(calculateNumber('DIVIDE', 1.4, 1.4)).to.equal(1);
    });
  });
});
