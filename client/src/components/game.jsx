const Game = ({game}) => {

  return (
    <span className='games'>
      <img className='headerImage' src={game.headerImage}/>
      <div className='title'>{game.title}</div>
      <div className='price'>{game.price}</div>
    </span>
  );
};

export default Game;