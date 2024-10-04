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
