import {request, expect} from 'chai';
import {describe, it} from 'mocha';
import server from '../../../dist/app/server';

describe('POST /', () => {
  it('Creates entry if user exists', (done) => {
    request(server)
      .post('/')
      .end((err, res) => {
        expect(err).to.be.equal(null);
        expect(res.status).to.equal(200);
        expect(res.type).to.equal('application/json');
        expect(res.body.message).to.equal('Hello World!');
        done();
      });
  });
});


describe('error handling', () => {
  it('404', (done) => {
    request(server)
      .post('/unknown')
      .end((err, res) => {
        expect(err).to.be.an('error');
        expect(res.status).to.equal(404);
        expect(res.type).to.equal('application/json');
        expect(res.body.status).to.equal(404);
        expect(res.body.message).to.equal('Not Found');

        done();
      });
  });
});
