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
  console.log('Begin seeding database...');

  for (let i = 1; i <= 100; i++) {

    let gameEntry = new Game({
      id: i,
      tags: createRandomTags(tagsArray),
      similarGames: []
    });

    await gameEntry.save()
      .catch(err => {
        console.log('Error saving game', err);
      });
  }

  await Game.find().sort({ id: 1 })
    .then((games) => {
      let gameTags;
      let similarGames = [];

      for (let i = 0; i < games.length; i++) {
        gameTags = games[i].tags;

        for (let j = 0; j < games.length; j++) {

          if (similarGames.length < 10) {
            let found = gameTags.some(tag => games[j].tags.indexOf(tag) >= 0);
            if (found && (games[i].id !== games[j].id) && (similarGames.indexOf(games[j].id) === -1)) {
              similarGames.push(games[j].id);
            }
          } else {
            Game.updateOne({ id: games[i].id }, { $set: { similarGames: similarGames } })
              .catch(err => console.log('Error with update', err));
            similarGames = [];
            break;
          }
        }
      }
    })
    .catch(err => {
      console.log('Error querying database', err);
    });
  setTimeout(() => {
    console.log('Finished seeding');
    process.exit();
  }, 1000);
};

seedGames();

module.exports = {tagsArray, createRandomTags, seedGames};