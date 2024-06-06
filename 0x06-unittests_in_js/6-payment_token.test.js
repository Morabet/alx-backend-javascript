const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(success), where success == true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      try {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      } catch (error) {
        done(error);
      }
    });
  }));
});

