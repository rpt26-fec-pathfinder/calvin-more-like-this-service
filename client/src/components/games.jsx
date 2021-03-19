import Game from './game.jsx';

const Games = ({games}) => {

  return (
    <div className='gamesContainer'>
      {games.map((currentGame, i) => (
        <Game game={currentGame} key={i}/>
      ))}
    </div>
  );
};

export default Games;