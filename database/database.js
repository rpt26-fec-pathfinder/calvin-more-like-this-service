const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let moreLikeThisSchema = new mongoose.Schema({
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