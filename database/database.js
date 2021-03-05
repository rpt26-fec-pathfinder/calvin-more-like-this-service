const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moreLikeThis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to database');
// });

const moreLikeThisSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  title: String,
  price: String,
  releaseDate: String,
  reviewCount: Number,
  reviewRating: String,
  tags: [String],
  headerImage: String,
  gallery: [String],
  similarGames: [
    {
      id: {type: Number, unique: true},
      title: String,
      price: String,
      releaseDate: String,
      reviewCount: Number,
      reviewRating: String,
      tags: [String],
      headerImage: String,
      gallery: [String]
    }
  ]
});

let Game = mongoose.model('Game', moreLikeThisSchema);

module.exports = Game;