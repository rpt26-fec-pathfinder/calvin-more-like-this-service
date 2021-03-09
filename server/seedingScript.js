const mongoose = require('mongoose');
const { Game } = require('../database/index.js');
const axios = require('axios');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;


// 62 random words that will be used for 'tags' in database
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1
  }
});

const tagsArray = lorem.generator.words;

const createRandomTags = (tags) => {
  let randomTags = [];
  while (randomTags.length < 5) {
    let randomIndex = Math.floor(Math.random() * tags.length);
    randomTags.push(tags[randomIndex]);
  }
  return randomTags;
};


///// Seed my database function /////


const seedGames = () => {
  // create placeholders for queried data
  let title;
  let price;
  let releaseDate;
  let tags;
  let reviewCount;
  let reviewRating;
  let headerImage;
  let gallery;

  let promises = [];

  // start entires for database
  for (let i = 2; i <= 100; i++) {

    // // GET request to James' product endpoint
    // axios.get(`jamesEndpoint/:${i}`)
    //   .then(response => {
    //     /*
    //     title = response.
    //     price = response.
    //     releaseDate = response.
    //     */
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // // GET request to Tim's review endpoint
    // axios.get(`timEndpoint/:${i}`)
    //   .then(response => {
    //     /*
    //     reviewCount = response.
    //     reviewRating = response.
    //     */
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // // GET request to Anthony's photo endpoint
    // axios.get(`anthonyEndpoint/:${i}`)
    //   .then(response => {
    //     /*
    //     headerImage = response.
    //     gallery = response.
    //     */
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    let gameEntry = new Game({
      id: i,
      title: title,
      price: price,
      releaseDate: releaseDate,
      reviewCount: reviewCount,
      reviewRating: reviewRating,
      tags: createRandomTags(tagsArray),
      headerImage: headerImage,
      gallery: gallery,
      similarGames: []
    });

    let savedGame = gameEntry.save();
    promises.push(savedGame);
  }

  Promise.all(promises)
    .then((games) => {
      let gameTags;
      let similarGames = [];
      // iterate through 2-100 games
      for (let i = 2; i < games.length; i++) {
        // retrieve tags array for current game
        gameTags = games[i].tags;
        for (let j = 2; j < games.length; j++) {
          // save games in inner loop where at least one tag matches and game ids do not match
          gameTags.some(tag => {
            if (similarGames.length < 5) {
              if (games[j].tags.indexOf(tag) !== -1 && games[i].id !== games[j].id) {
                similarGames.push(games[j]);
              }
            } else {
              // update current game in outer loop with found similar games
              Game.updateOne({ id: games[i].id }, {$set: { similarGames: similarGames }}, (err, result) => {
                if (err) {
                  throw err;
                }
              });
              similarGames = [];
            }
          });
        }
      }
    })
    .catch(err => {
      console.log('Error in promise chain', err);
    });
};

///// Seed main example from Steam website team will be using /////


const steamSampleSeed = () => {
  let gameEntry = new Game({
    id: 1,
    title: 'Age of Empires II: Definitive Edition',
    price: '$19.99',
    releaseDate: 'Nov 14, 2019',
    reviewCount: 64495,
    reviewRating: 'Very Positive',
    tags: [
      'Strategy', 'RTS', 'City Builder', 'Multiplayer', 'Historical', 'Base Building', 'Singleplayer', 'Medieval', 'Classic', 'Resource Management', 'Remake', 'Tactical', 'Real-Time', 'Co-op', 'Action', 'Replay Value', 'Isometric', '2D', 'Adventure', 'Great Soundtrack'
    ],
    headerImage: 'TBD',
    gallery: ['TBD'],
    similarGames: [
      {
        id: 10,
        title: 'Northgard',
        price: '$29.99',
        releaseDate: 'Mar 7, 2018',
        reviewCount: 27042,
        reviewRating: 'Very Positive',
        tags: [
          'City Builder', 'RTS', 'Strategy', 'Colony Sim', 'Indie'
        ],
        headerImage: 'TBD',
        gallery: ['TBD']
      }
    ]
  });

  gameEntry.save((err, gameEntry) => {
    if (err) {
      console.log('Error is', err);
    }
  });
};

// run seeding functions

steamSampleSeed();
seedGames();