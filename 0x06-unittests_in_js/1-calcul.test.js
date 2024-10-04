const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are 0.4 and 0.4', function () {
      assert.strictEqual(calculateNumber('SUM', 0.4, 0.4), 0);
    });

    it('should handle negative numbers correctly for SUM', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 6 when inputs are 5.5 and 0.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 0.4), 6);
    });

    it('should handle negative numbers correctly for SUBTRACT', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 0.8 when inputs are 4.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 4.5), 0.8);
    });

    it('should return 0.2 when inputs are -1.4 and -4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.2);
    });
  });
});
