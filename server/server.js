const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 4022;

app.use(express.static(path.join(__dirname + '/../public/dist')));

// Added with SEIR's assistance
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
// Added with SEIR's assistance

// app.get('/', (req, res) => {
//   res.status(200).end();
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});