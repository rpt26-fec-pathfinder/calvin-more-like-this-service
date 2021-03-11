const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { retrieveGameAtId } = require('../database/index.js');
const getData = require('./helper.js');

const app = express();
const port = 4022;

app.use(express.static(path.join(__dirname + '/../public/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  let data = {};
  if (id > 100) {
    res.status(404).end('Game does not exist');
  } else {
    // retrieve tags from my database
    retrieveGameAtId(id)
      .then(results => {
        if (!results) {
          res.status(404).end();
        } else {
          data.id = results[0].id;
          data.tags = results[0].tags;
          data.similarGames = results[0].similarGames;
        }
      })
      .catch(err => console.log('Databse query error.', err))
      // retrieve teammates data
      .then(() => {
        return getData(id);
      })
      .then(response => {
        if (!response) {
          res.status(404).end();
        } else {
          data.title = response.title;
          data.price = response.price;
          data.releaseDate = response.releaseDate;
          data.reviewCount = response.reviewCount;
          data.reviewRating = response.title;
          data.headerImage = response.headerImage;
          data.gallery = response.gallery;
        }
      })
      .then(() => {
        res.status(200).send(data);
      })
      .catch(err => console.log('GET request error.', err));
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});