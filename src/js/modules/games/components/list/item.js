import React from 'react';
import PropTypes from 'prop-types';
import { Link, ListItem } from 'components/ui';
import styles from './styles.scss';

const Item = ({
  game: {
    id,
    date,
    pitch: {
      name: pitchName
    },
    teamAScore,
    teamBScore,
    time
  },
  hideScore,
  urlFormatter
}) => (
  <Link to={urlFormatter(id)}>
    <ListItem className={styles.gamesListItem}>
      <div className={styles.dateTime}>
        {date} {time}
      </div>

      <div className={styles.pitch}>
        {pitchName}
      </div>

      {!hideScore && (
        <div className={styles.score}>
          {teamAScore} : {teamBScore}
        </div>
      )}
    </ListItem>
  </Link>
);

Item.propTypes = {
  game: PropTypes.object.isRequired,
  hideScore: PropTypes.bool,
  urlFormatter: PropTypes.func.isRequired
};

export default Item;
