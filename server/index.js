const app = require('./server.js');
const dotenv = require('dotenv');

dotenv.config();

// const port = process.env.NODE_ENV === 'test' ? 4000 : 4022;

const port = 4022;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}