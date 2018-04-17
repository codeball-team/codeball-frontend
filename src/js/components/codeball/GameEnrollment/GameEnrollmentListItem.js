import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { UsersListItem } from 'components/codeball';
import styles from './styles.scss';

class GameEnrollmentListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    enrollmentStatus: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  };

  render() {
    const { className, enrollmentStatus, user } = this.props;

    return (
      <UsersListItem
        className={classNames(styles.gameEnrollmentListItem, className)}
        user={user}>
        <div className={styles.enrollmentStatus}>
          {enrollmentStatus}
        </div>
      </UsersListItem>
    );
  }
}

export default BaseComponent(GameEnrollmentListItem);
