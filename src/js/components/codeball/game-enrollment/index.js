import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import {
  ENROLLMENT_STATUS_MAYBE, ENROLLMENT_STATUS_NO,
  ENROLLMENT_STATUS_STRING, ENROLLMENT_STATUS_YES
} from 'constants';
import GameEnrollmentList from './list';
import { Render } from 'components/ui';
import styles from './styles.scss';

const ENROLLMENT_STATUS_CLASSNAMES = {
  [ENROLLMENT_STATUS_MAYBE]: styles.maybe,
  [ENROLLMENT_STATUS_NO]: styles.no,
  [ENROLLMENT_STATUS_YES]: styles.yes
};

const GameEnrollment = ({ className, enrolledUsersPerStatus }) => (
  <div className={classNames(styles.gameEnrollment, className)}>
    {enrolledUsersPerStatus.map(({ enrollmentStatus, enrolledUsers }, index) => (
      <Render key={index} when={enrolledUsers.length > 0}>
        <GameEnrollmentList
          className={ENROLLMENT_STATUS_CLASSNAMES[enrollmentStatus]}
          enrollmentStatus={ENROLLMENT_STATUS_STRING[enrollmentStatus]}
          users={enrolledUsers} />
      </Render>
    ))}
  </div>
);

GameEnrollment.propTypes = {
  className: PropTypes.string,
  enrolledUsersPerStatus: PropTypes.array.isRequired
};

export default GameEnrollment;
