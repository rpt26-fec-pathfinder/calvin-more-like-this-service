const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

let MONGO_URI = 'mongodb://mongo:27017/steam';

if (process.env.NODE_ENV === 'development') {
  MONGO_URI = 'mongodb://localhost/steam';
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Connected to ${MONGO_URI}`);
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