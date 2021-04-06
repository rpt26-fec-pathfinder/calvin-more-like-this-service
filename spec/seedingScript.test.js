// jest.useFakeTimers(10000);

// const mongoose = require('mongoose');
// const {tagsArray, createRandomTags, seedGames} = require('../server/seedingScript.js');
// const { Game } = require('../database/index.js');

// beforeAll(async () => {
//   // await mongoose.connect('mongodb://mongo:27017/steam', {
//   await mongoose.connect('mongodb://localhost/moreLikeThis', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   });
// });

// // afterAll(async () => {
// //   await mongoose.connection.close();
// // });

// describe('Testing database after seeding', () => {

//   test('Each game should contain 5 tags', async (done) => {
//     let tags = createRandomTags(tagsArray);
//     expect(tags.length).toBe(5);
//     done();
//   });

//   test('Duplicate tags should not exist', async (done) => {
//     for (let i = 1; i <= 100; i++) {
//       // distinct returns an array of unique values
//       // if no duplicates exsist, the length should be 5
//       let collection = await Game.distinct('tags', {id: i});
//       expect(collection.length).toBe(5);
//     }
//     done();
//   });

//   test('Database should contain 100 entries', async (done) => {
//     let collection = await Game.find().sort({id: 1});
//     expect(collection.length).toBe(100);
//     done();
//   });

//   test('Duplicate games in "similarGames" key should not exist', async (done) => {
//     for (let i = 1; i <= 5; i++) {
//       let collection = await Game.distinct('similarGames', {id: i});
//       expect(collection.length).toBeTruthy();
//     }
//     done();
//   });

// });