import Game from './game.jsx';
import {GamesContainer, GamesScroll} from '../styledComponents/styled.games.jsx';


const Games = ({games, hoverEnter, hoverLeave}) => {

  return (
    <GamesContainer>
      <GamesScroll>
        {games.map((currentGame, i) => (
          <Game game={currentGame} key={currentGame.id.toString()} hoverEnter={hoverEnter} hoverLeave={hoverLeave}/>
        ))}
      </GamesScroll>


    </GamesContainer>
  );
};

export default Games;