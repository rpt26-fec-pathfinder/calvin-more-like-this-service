import Game from './game.jsx';
import {GamesContainer, GamesScroll} from '../styledComponents/styled.games.jsx';

const Games = ({games}) => {

  return (
    <GamesContainer>
      <GamesScroll>
        {games.map((currentGame, i) => (
          <Game game={currentGame} key={i}/>
        ))}
      </GamesScroll>
    </GamesContainer>
  );
};

export default Games;