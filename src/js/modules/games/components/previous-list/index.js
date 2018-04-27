import { connect } from 'react-redux';
import { selectPreviousGames } from 'games/selectors';
import List from 'games/components/list';

const urlFormatter = (id) => `/games/previous/${id}`;

const mapStateToProps = (state) => {
  const games = selectPreviousGames(state);

  return {
    games,
    title: `Previous games (${games.length})`,
    urlFormatter
  };
};

export default connect(mapStateToProps)(List);
