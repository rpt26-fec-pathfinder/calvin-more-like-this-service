const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/steam', {
// mongoose.connect('mongodb://localhost/steam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});

const moreLikeThisSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  tags: [String],
  similarGames: [Number]
});

const Game = mongoose.model('Game', moreLikeThisSchema);

const retrieveGameAtId = (id) => {
  return Game.find({id: id});
};

module.exports = {Game, retrieveGameAtId};
