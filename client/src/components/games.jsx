import Game from './game.jsx';
import {GamesContainer} from '../styledComponents/styled.games.jsx';

const Games = ({games}) => {

  return (
    <GamesContainer>
      {games.map((currentGame, i) => (
        <Game game={currentGame} key={i}/>
      ))}
    </GamesContainer>
  );
};

export default Games;