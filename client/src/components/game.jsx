import {StyledGames, GameImage, GameTitle, GamePrice} from '../styledComponents/styled.game.jsx';

const Game = ({game}) => {

  return (
    <StyledGames href={`http://54.219.241.15:3000/${game.id}`}>
      <GameImage src={game.headerImage}/>
      <GameTitle>{game.title}</GameTitle>
      <GamePrice>{game.price}</GamePrice>
    </StyledGames>
  );
};

export default Game;