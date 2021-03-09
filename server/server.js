const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {retrieveAllGames, retrieveGameAtId} = require('../database/index.js');

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

app.get('/allGames', (req, res) => {
  retrieveAllGames((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results.sort());
    }
  });
});

app.get('/:id', (req, res) => {
  let id = req.params.id;
  retrieveGameAtId(id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(
        `<p>Game ID: ${result[0].id}</p>
        <p>Game Tags: ${result[0].tags}</p>
        <p>Similar Games: ${result[0].similarGames}</p>`
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});