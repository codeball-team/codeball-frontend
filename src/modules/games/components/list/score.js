import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Score = ({ hideScore, teamAScore, teamBScore }) => hideScore ? null : (
  <div className={styles.score}>
    {teamAScore} : {teamBScore}
  </div>
);

Score.propTypes = {
  hideScore: PropTypes.bool,
  teamAScore: PropTypes.number,
  teamBScore: PropTypes.number
};

export default Score;
