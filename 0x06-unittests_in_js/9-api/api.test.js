const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  const api = 'http://localhost:7865';

  it('gET / returns correct response', () => new Promise((done) => {
    request.get(`${api}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
  it('gET /cart/:id returns correct response for valid :id', () => new Promise((done) => {
    request.get(`${api}/card/1`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
    });
  }));
  it('gET /cart/:id returns 404 response for non-numeric values in :id', () => new Promise((done) => {
    request.get(`${api}/card/a`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});

