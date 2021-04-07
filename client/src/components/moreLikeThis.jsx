import axios from 'axios';
import Games from './games.jsx';
import {StyledMoreLikeThis, ServiceHeader, SeeAll, ServiceTitle} from '../styledComponents/styled.moreLikeThis.jsx';

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
    let id = window.location.pathname.substring(1);
    await axios.get(`/morelikethis/${id}`)
      .then(games => {
        this.setState({games: games.data});
      });
  }

  render() {

    return (
      <StyledMoreLikeThis>
        <ServiceHeader>
          <SeeAll href={window.location.pathname}>See all</SeeAll>
          <ServiceTitle>More Like This</ServiceTitle>
        </ServiceHeader>
        <Games games={this.state.games}/>
      </StyledMoreLikeThis>
    );
  }
}

export default MoreLikeThis;