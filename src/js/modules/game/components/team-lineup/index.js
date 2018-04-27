import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import Users from 'users/components/list/component';
import styles from './styles.scss';

const TeamLineup = ({ className, name, users }) => (
  <div className={classNames(styles.teamLineup, className)}>
    <div className={styles.name}>
      {name}
    </div>

    <Users users={users} />
  </div>
);

TeamLineup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default TeamLineup;
