const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { retrieveGameAtId } = require('../database/index.js');
const getData = require('./helper.js');

const app = express();
app.use(cors());

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
  res.sendFile(path.resolve('public/dist/index.html'));
});

app.get('/morelikethis/:id', async (req, res) => {
  let id = req.params.id;

  if (id > 100 || id < 0) {
    res.status(404).end('Game does not exist');
  } else {
    // retrieve tags from my database
    await retrieveGameAtId(id)
      .then(results => {
        if (!results) {
          res.status(404).end();
        } else {
          return results[0].similarGames;
        }
      })
      .catch(err => console.log('Databse query error.', err))

      // retrieve teammates data
      .then(async similarGames => {
        let similarGamesData = [];
        for (let i = 0; i < similarGames.length; i++) {
          similarGamesData.push(await getData(similarGames[i]));
        }
        res.status(200).send(similarGamesData);
      })
      .catch(err => console.log('GET request error.', err));
  }
});


module.exports = app;