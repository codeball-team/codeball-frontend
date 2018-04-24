import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import Date from './date';
import Pitch from './pitch';
import TeamAScore from './team-a-score';
import TeamBScore from './team-b-score';
import Time from './time';
import styles from './styles.scss';

const Score = ({ className }) => (
  <div className={classNames(styles.gameScore, className)}>
    <div className={styles.score}>
      <TeamAScore className={classNames(styles.teamScore, styles.scoreA)} />
      <span> : </span>
      <TeamBScore className={classNames(styles.teamScore, styles.scoreB)} />
    </div>

    <Pitch className={styles.details} />
    <Date className={styles.details} />
    <Time className={styles.details} />
  </div>
);

Score.propTypes = {
  className: PropTypes.string
};

export default Score;
