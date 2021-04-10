const {app} = require('./server.js');
// const dotenv = require('dotenv');

// dotenv.config();

const port = 4022;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});