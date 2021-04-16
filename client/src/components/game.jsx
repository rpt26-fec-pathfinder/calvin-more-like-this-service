import {StyledGames, GameImage, GameTitle, GamePrice} from '../styledComponents/styled.game.jsx';


const Game = ({game, hoverEnter, hoverLeave}) => {

  return (

    <StyledGames href={`${window.location.origin}/${game.id}`} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
      <GameImage src={game.headerImage}/>
      <GameTitle>{game.title}</GameTitle>
      <GamePrice>{game.price}</GamePrice>
    </StyledGames>

  );
};

export default Game;