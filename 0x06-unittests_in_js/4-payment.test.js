const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi with stubs', function () {
  let stub;
  let logSpy;

  beforeEach(function () {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    logSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    stub.restore();
    logSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log "The total is: 10" to the console', function () {
    sendPaymentRequestToApi(100, 20);

    expect(logSpy.calledOnce).to.be.true;

    expect(logSpy.calledWith('The total is: 10')).to.be.true;
  });
});
