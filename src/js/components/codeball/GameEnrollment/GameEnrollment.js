import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import {
  ENROLLMENT_STATUS_MAYBE, ENROLLMENT_STATUS_NO,
  ENROLLMENT_STATUS_STRING, ENROLLMENT_STATUS_YES
} from 'constants';
import { BaseComponent } from 'components/base';
import GameEnrollmentList from './GameEnrollmentList';
import styles from './styles.scss';

const ENROLLMENT_STATUS_CLASSNAMES = {
  [ENROLLMENT_STATUS_MAYBE]: styles.maybe,
  [ENROLLMENT_STATUS_NO]: styles.no,
  [ENROLLMENT_STATUS_YES]: styles.yes
};

class GameEnrollment extends Component {
  static propTypes = {
    className: PropTypes.string,
    enrolledUsersPerStatus: PropTypes.array.isRequired
  };

  render() {
    const { className, enrolledUsersPerStatus } = this.props;

    return (
      <div className={classNames(styles.gameEnrollment, className)}>
        {enrolledUsersPerStatus.map(({ enrollmentStatus, enrolledUsers }, index) => (
          <GameEnrollmentList
            key={index}
            renderWhen={enrolledUsers.length > 0}
            className={ENROLLMENT_STATUS_CLASSNAMES[enrollmentStatus]}
            enrollmentStatus={ENROLLMENT_STATUS_STRING[enrollmentStatus]}
            users={enrolledUsers} />
        ))}
      </div>
    );
  }
}

export default BaseComponent(GameEnrollment);
