const getData = require('../server/helper');

test('Response object should not be empty', async (done) => {
  for (let i = 0; i <= 100; i++) {
    let data = await getData(i);
    expect(data).toBeDefined();
  }
  done();
});