import axios from 'axios';
import Games from './games.jsx';
import Slider from './slider.jsx';

class MoreLikeThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    this.getGames();
  }

  async getGames() {
    // use axios to fetch data
    let id = window.location.pathname.substring(1);
    await axios.get(`/morelikethis/${id}`)
      .then(games => {
        this.setState({games: games.data});
      });
  }

  render() {

    return (
      <React.Fragment>
        <div id='serviceTitle'>
          <a>See all</a>
          <h2>More Like This</h2>
        </div>
        <Games games={this.state.games}/>
        <Slider/>
      </React.Fragment>
    );
  }
}

export default MoreLikeThis;