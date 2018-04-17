import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { List } from 'components/ui';
import GameEnrollmentListItem from './list-item';
import styles from './styles.scss';

const GameEnrollmentList = ({ className, enrollmentStatus, users }) => (
  <List className={classNames(styles.gameEnrollmentList, className)}>
    {users.map((user, index) => (
      <GameEnrollmentListItem
        key={index}
        user={user}
        enrollmentStatus={enrollmentStatus} />
    ))}
  </List>
);


GameEnrollmentList.propTypes = {
  className: PropTypes.string,
  enrollmentStatus: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default GameEnrollmentList;
