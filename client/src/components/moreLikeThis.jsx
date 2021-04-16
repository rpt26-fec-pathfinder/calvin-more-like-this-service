import axios from 'axios';
import Games from './games.jsx';
import Hover from './hover.jsx';
import {StyledMoreLikeThis, ServiceHeader, SeeAll, ServiceTitle} from '../styledComponents/styled.moreLikeThis.jsx';


class MoreLikeThis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      hover: false,
      hoverData: null
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

  hoverEnter(e) {
    e.preventDefault();
    let url = e.target.href.split('/');
    let id = parseInt(url.pop());
    let data;
    for (let i = 0; i < this.state.games.length; i++) {
      if (this.state.games[i].id === id) {
        data = this.state.games[i];
        console.log(data);
        break;
      }
    }
    this.setState({
      hover: true,
      hoverData: data
    });
  }

  hoverLeave(e) {
    e.preventDefault();
    this.setState({
      hover: false,
      hoverData: null
    });
  }

  render() {

    return (
      <StyledMoreLikeThis>
        <ServiceHeader>
          <SeeAll href={window.location.pathname}>See all</SeeAll>
          <ServiceTitle>More Like This</ServiceTitle>
        </ServiceHeader>
        <Games games={this.state.games} hoverEnter={this.hoverEnter.bind(this)} hoverLeave={this.hoverLeave.bind(this)}/>
        <Hover game={this.state.hoverData} hover={this.state.hover}/>
      </StyledMoreLikeThis>
    );
  }
}

export default MoreLikeThis;