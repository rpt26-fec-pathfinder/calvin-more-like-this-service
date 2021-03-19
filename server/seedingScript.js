const { Game } = require('../database/index.js');
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
    let tag = tags[randomIndex];
    if (randomTags.indexOf(tag) === -1) {
      randomTags.push(tag);
    }
  }
  return randomTags;
};

///// Seed my database function /////

const seedGames = async () => {

  // start entires for database
  for (let i = 1; i <= 100; i++) {

    let gameEntry = new Game({
      id: i,
      tags: createRandomTags(tagsArray),
      similarGames: []
    });

    await gameEntry.save()
      .catch(err => err);
  }

  await Game.find().sort({ id: 1 })
    .then((games) => {
      let gameTags;
      let similarGames = [];
      // iterate through retrieved games
      for (let i = 0; i < games.length; i++) {
        // retrieve tags array for current game
        gameTags = games[i].tags;
        // use some to find at least one tag in another game
        gameTags.some(async (tag) => {
          for (let j = 0; j < games.length; j++) {
            if (similarGames.length < 5) {
              // if an outer loop game tag can be found in an inner loop game and the games are not the same and the game does not already exist
              if (games[j].tags.indexOf(tag) !== -1 && games[i].id !== games[j].id && similarGames.indexOf(games[j].id) === -1) {
                similarGames.push(games[j].id);
              }
            } else {
              // update outer loop game with similar games if found
              await Game.updateOne({ id: games[i].id }, { $set: { similarGames: similarGames } })
                .then(() => similarGames = [])
                .catch(err => console.log('Error with update', err));
            }
          }
        });
      }
    })
    .catch(err => {
      console.log('Error querying database', err);
    });
  setTimeout(() => {
    process.exit();
  }, 1000);
};

// run seeding function

seedGames();

module.exports = {tagsArray, createRandomTags, seedGames};