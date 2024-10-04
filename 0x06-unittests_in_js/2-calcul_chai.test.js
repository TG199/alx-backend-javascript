import  { expect } from 'chai'
import calculateNumber from './2-calcul_chai.js';


describe('calculateNumber with chai', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are 0.4 and 0.4', function () {
      expect(calculateNumber('SUM', 0.4, 0.4)).to.equal(0);
    });

    it('should handle negative numbers correctly for SUM', function () {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 5 when inputs are 5.5 and 0.4', function () {
      expect(calculateNumber('SUBTRACT', 5.5, 0.4)).to.equal(5);
    });

    it('should handle negative numbers correctly for SUBTRACT', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);  // Allow margin for floating point precision
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 when inputs are 4.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 4.4, 4.5)).to.be.closeTo(1, 0.01);
    });

    it('should handle negative numbers correctly for DIVIDE', function () {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.be.closeTo(0.2, 0.01);
    });
  });
});
export default calculateNumber
