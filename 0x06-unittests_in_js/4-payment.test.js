const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;
  beforeEach(() => {
    //  Stubs the Utils.calculateNumber method to always return 10.
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns('10');
    // Creates a spy on console.log to track its calls.
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});

