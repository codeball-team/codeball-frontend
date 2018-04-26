import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import UsersListItem from 'users/components/list/item';
import styles from './styles.scss';

const GameEnrollmentListItem = ({ className, enrollmentStatus, user }) => (
  <UsersListItem
    className={classNames(styles.gameEnrollmentListItem, className)}
    user={user}>
    <div className={styles.enrollmentStatus}>
      {enrollmentStatus}
    </div>
  </UsersListItem>
);

GameEnrollmentListItem.propTypes = {
  className: PropTypes.string,
  enrollmentStatus: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default GameEnrollmentListItem;
