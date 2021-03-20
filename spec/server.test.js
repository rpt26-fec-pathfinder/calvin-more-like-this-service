const {app} = require('../server/server.js');
const request = require('supertest');

let server;

beforeAll(() => {
  server = app.listen(4000, () => {
    console.log('Listening on 4000 for testing');
  });
});

afterEach(() => {
  server.close();
});

describe('Testing GET requests to server', () => {

  test('Should successfully return an Array of objects', async done => {
    let id = Math.floor(Math.random() * 100 + 1);
    await request(app)
      .get(`/morelikethis/${id}`)
      .expect(200)
      .then(games => {
        expect(Array.isArray(games.body)).toBeTruthy();
        expect(typeof games.body[0] === 'object' && typeof games.body[0] !== undefined && typeof games.body[0] !== null).toBeTruthy();
      });
    done();
  });

  test('Should return error string if id is greater than 100', async done => {
    await request(app)
      .get('/morelikethis/101')
      .expect(404)
      .then(response => {
        expect(response.error.text).toBe('Game does not exist');
      });
    done();
  });

  test('Should return error string if id is less than 100', async done => {
    await request(app)
      .get('/morelikethis/-1')
      .expect(404)
      .then(response => {
        expect(response.error.text).toBe('Game does not exist');
      });
    done();
  });

});