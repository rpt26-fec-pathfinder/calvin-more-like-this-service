const Game = ({game}) => {

  return (
    <span className='games'>
      <div className='headerImage'>{game.headerImage}</div>
      <div className='title'>{game.title}</div>
      <div className='price'>{game.price}</div>
    </span>
  );
};

export default Game;