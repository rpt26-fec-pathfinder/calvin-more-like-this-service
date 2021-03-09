const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {retrieveAllGames, retrieveGameAtId} = require('../database/index.js');

const app = express();
const port = 4022;

app.use(express.static(path.join(__dirname + '/../public/dist')));

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


app.get('/:id', (req, res) => {
  let id = req.params.id;
  retrieveGameAtId(id, (err, result) => {
    if (err) {
      res.status(404).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/allGames', (req, res) => {
  retrieveAllGames((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results.sort());
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});