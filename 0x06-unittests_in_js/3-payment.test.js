const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  beforeEach(() => {
    //  A spy records information about how the function was called,
    // such as the arguments and the call count.
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(() => {
    //  This restores the original Utils.calculateNumber function, removing the spy.
    //  It ensures that other tests are not affected by this spy.
    calculateNumberSpy.restore();
  });
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
  });
});

