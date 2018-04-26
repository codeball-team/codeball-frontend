import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import Users from 'users/components/list/component';
import styles from './styles.scss';

const TeamLineup = ({ className, teamName, users }) => (
  <div className={classNames(styles.teamLineup, className)}>
    <div className={styles.teamName}>
      {teamName}
    </div>

    <Users users={users} />
  </div>
);

TeamLineup.propTypes = {
  className: PropTypes.string,
  teamName: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default TeamLineup;
