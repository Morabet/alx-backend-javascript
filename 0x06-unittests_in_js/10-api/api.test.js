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
  it('pOST /login returns valid response', () => new Promise((done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'XXX' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome XXX');
      done();
    });
  }));
  it('gET /available_payments returns valid response', () => new Promise((done) => {
    request.get(`${api}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  }));
});

