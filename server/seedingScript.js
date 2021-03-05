const mongoose = require('mongoose');
const Game = require('../database/database.js');

let runSeed = () => {

  let gameEntry = new Game({
    id: 1,
    title: 'Age of Empires II: Definitive Edition',
    price: '$19.99',
    releaseDate: 'Nov 14, 2019',
    reviewCount: 64495,
    reviewRating: 'Very Positive',
    tags: [
      'Strategy',
      'RTS',
      'City Builder',
      'Multiplayer',
      'Historical',
      'Base Building',
      'Singleplayer',
      'Medieval',
      'Classic',
      'Resource Management',
      'Remake',
      'Tactical',
      'Real-Time',
      'Co-op',
      'Action',
      'Replay Value',
      'Isometric',
      '2D',
      'Adventure',
      'Great Soundtrack'
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
          'City Builder',
          'RTS',
          'Strategy',
          'Colony Sim',
          'Indie'
        ],
        headerImage: 'TBD',
        gallery: ['TBD']
      }
    ]
  });

  gameEntry.save((err, gameEntry) => {
    if (err) {
      console.log('Error is', err);
    } else {
      console.log(gameEntry);
    }
  });

};

runSeed();