import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  ENROLLMENT_STATUS_MAYBE,
  ENROLLMENT_STATUS_NO,
  ENROLLMENT_STATUS_STRING,
  ENROLLMENT_STATUS_YES
} from 'constants';
import { Render } from 'components';
import List from './list';
import styles from './styles.scss';

const ENROLLMENT_STATUS_CLASSNAMES = {
  [ENROLLMENT_STATUS_MAYBE]: styles.maybe,
  [ENROLLMENT_STATUS_NO]: styles.no,
  [ENROLLMENT_STATUS_YES]: styles.yes
};

const Enrollments = ({ className, enrolledUsersPerStatus }) => (
  <div className={classNames(styles.gameEnrollment, className)}>
    {enrolledUsersPerStatus.map(({ enrollmentStatus, enrolledUsers }, index) => (
      <Render key={index} when={enrolledUsers.length > 0}>
        <List
          className={ENROLLMENT_STATUS_CLASSNAMES[enrollmentStatus]}
          enrollmentStatus={ENROLLMENT_STATUS_STRING[enrollmentStatus]}
          users={enrolledUsers} />
      </Render>
    ))}
  </div>
);

Enrollments.propTypes = {
  className: PropTypes.string,
  enrolledUsersPerStatus: PropTypes.array.isRequired
};

export default Enrollments;
