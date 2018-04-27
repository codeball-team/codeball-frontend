import { connect } from 'react-redux';
import { selectUpcomingGames } from 'games/selectors';
import List from 'games/components/list';

const urlFormatter = (id) => `/games/upcoming/${id}`;

const mapStateToProps = (state) => {
  const games = selectUpcomingGames(state);

  return {
    games,
    hideScore: true,
    title: `Upcoming games (${games.length})`,
    urlFormatter
  };
};

export default connect(mapStateToProps)(List);
