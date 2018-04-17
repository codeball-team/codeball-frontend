import React, { Component, PropTypes } from 'react';
import { BaseComponent } from 'components/base';
import { Link, ListItem } from 'components/ui';
import styles from './styles.scss';

class GamesListItem extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    hideScore: PropTypes.bool,
    urlFormatter: PropTypes.func.isRequired
  };

  render() {
    const {
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
    } = this.props;

    return (
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
  }
}

export default BaseComponent(GamesListItem);
