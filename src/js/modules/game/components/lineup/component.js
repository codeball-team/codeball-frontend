import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TeamLineup } from 'components/codeball';
import styles from './styles.scss';

const Lineup = ({ className, teamA, teamB }) => (
  <div className={classNames(styles.gameLineup, className)}>
    <TeamLineup className={styles.teamLineup} teamName="Team A" users={teamA} />
    <TeamLineup className={styles.teamLineup} teamName="Team B" users={teamB} />
  </div>
);

Lineup.propTypes = {
  className: PropTypes.string,
  teamA: PropTypes.array.isRequired,
  teamB: PropTypes.array.isRequired
};

export default Lineup;
