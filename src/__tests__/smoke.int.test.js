import request from 'supertest';
import server from 'server';

describe('Smoke integration test', () => {
  it('should run correctly', () => {
    return new Promise(done => {
      request(server)
        .get('/smoke')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).toEqual({ message: 'OK' });
          done();
        });
    });
  });
});
