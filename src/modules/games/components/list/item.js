import React from 'react';
import PropTypes from 'prop-types';
import { Link, ListItem } from 'components';
import DateTime from './date-time';
import Pitch from './pitch';
import Score from './score';
import styles from './styles.scss';

const Item = ({ game, hideScore, urlFormatter }) => (
  <Link to={urlFormatter(game.id)}>
    <ListItem className={styles.gamesListItem}>
      <DateTime date={game.date} time={game.time} />
      <Pitch pitch={game.pitch} />
      <Score
        hideScore={hideScore}
        teamAScore={game.teamAScore}
        teamBScore={game.teamBScore} />
    </ListItem>
  </Link>
);

Item.propTypes = {
  game: PropTypes.object.isRequired,
  hideScore: PropTypes.bool,
  urlFormatter: PropTypes.func.isRequired
};

export default Item;
