import { connect } from 'react-redux';
import { selectUpcomingGames, selectUpcomingGamesTitle } from 'games/selectors';
import List from 'games/components/list';

const urlFormatter = (id) => `/games/upcoming/${id}`;

const mapStateToProps = (state) => ({
  games: selectUpcomingGames(state),
  hideScore: true,
  title: selectUpcomingGamesTitle(state),
  urlFormatter
});

export default connect(mapStateToProps)(List);
