import { connect } from 'react-redux';
import { selectPreviousGames, selectPreviousGamesTitle } from 'games/selectors';
import List from 'games/components/list';

const urlFormatter = (id) => `/games/previous/${id}`;

const mapStateToProps = (state) => ({
  games: selectPreviousGames(state),
  title: selectPreviousGamesTitle(state),
  urlFormatter
});

export default connect(mapStateToProps)(List);
