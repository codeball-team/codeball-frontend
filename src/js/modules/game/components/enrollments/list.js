import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'components';
import Item from './item';
import styles from './styles.scss';

const EnrollmentsList = ({ className, enrollmentStatus, users }) => (
  <List className={classNames(styles.gameEnrollmentList, className)}>
    {users.map((user, index) => (
      <Item key={index} user={user} enrollmentStatus={enrollmentStatus} />
    ))}
  </List>
);

EnrollmentsList.propTypes = {
  className: PropTypes.string,
  enrollmentStatus: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

export default EnrollmentsList;
