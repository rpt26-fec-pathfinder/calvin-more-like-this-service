const {app} = require('../server/server.js');
const request = require('supertest');

let server;

beforeAll(() => {
  server = app.listen(3000, () => {
    console.log('Listening on 3000 for testing');
  });
});

afterEach(() => {
  server.close();
});

describe('Testing GET requests to server', () => {

  test('Should successfully return a JSON object', async done => {
    for (let i = 1; i <= 100; i++) {
      await request(app)
        .get(`/${i}`)
        .expect(200)
        .then(game => {
          expect(typeof game === 'object' && typeof game !== undefined && typeof game !== null).toBeTruthy();
        });
    }
    done();
  });

  test('Should return error string if id is greater than 100', async done => {
    await request(app)
      .get('/101')
      .expect(404)
      .then(response => {
        expect(response.error.text).toBe('Game does not exist');
      });
    done();
  });

});