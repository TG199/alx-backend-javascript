const request = require('request');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  before((done) => {
    require('./api');
    setTimeout(done, 100);
  });

  it('should return correct status code', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(baseUrl, (err, res) => {
      expect(res.body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const cartUrl = (id) => `${baseUrl}/cart/${id}`;

  it('should return correct status code when :id is a number', (done) => {
    request.get(cartUrl(12), (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get(cartUrl('hello'), (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
