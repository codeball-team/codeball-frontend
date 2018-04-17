import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { EditableText, Link } from 'components/ui';
import styles from './styles.scss';

class GameScore extends Component {
  static propTypes = {
    className: PropTypes.string,
    game: PropTypes.object.isRequired,
    isEditing: PropTypes.bool,
    pitch: PropTypes.object.isRequired,
    onEditGameScoreA: PropTypes.func,
    onEditGameScoreB: PropTypes.func
  };

  onGameScoreAChanged = teamAScore => {
    const { onEditGameScoreA } = this.props;
    onEditGameScoreA(teamAScore);
  };

  onGameScoreBChanged = teamBScore => {
    const { onEditGameScoreB } = this.props;
    onEditGameScoreB(teamBScore);
  };

  render() {
    const {
      className,
      game: {
        date,
        time,
        teamAScore,
        teamBScore
      },
      isEditing,
      pitch: {
        id: pitchId,
        name: pitchName
      }
    } = this.props;

    return (
      <div className={classNames(styles.gameScore, className)}>
        <div className={styles.score}>
          <EditableText
            className={classNames(styles.teamScore, styles.scoreA)}
            isEditing={isEditing}
            text={teamAScore}
            maxLength="2"
            onChange={this.onGameScoreAChanged} />

          <span> : </span>

          <EditableText
            className={classNames(styles.teamScore, styles.scoreB)}
            isEditing={isEditing}
            text={teamBScore}
            maxLength="2"
            onChange={this.onGameScoreBChanged} />
        </div>

        <div className={styles.details} title="Pitch">
          <Link to={`/pitches/${pitchId}`}>
            {pitchName}
          </Link>
        </div>

        <div className={styles.details} title="Game date">
          {date}
        </div>

        <div className={styles.details} title="Game time">
          {time}
        </div>
      </div>
    );
  }
}

export default BaseComponent(GameScore);
