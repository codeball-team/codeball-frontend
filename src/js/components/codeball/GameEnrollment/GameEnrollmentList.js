import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { List } from 'components/ui';
import GameEnrollmentListItem from './GameEnrollmentListItem';
import styles from './styles.scss';

class GameEnrollmentList extends Component {
  static propTypes = {
    className: PropTypes.string,
    enrollmentStatus: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
  };

  render() {
    const { className, enrollmentStatus, users } = this.props;

    return (
      <List className={classNames(vstyles.gameEnrollmentList, className)}>
        {users.map((user, index) => (
          <GameEnrollmentListItem
            key={index}
            user={user}
            enrollmentStatus={enrollmentStatus} />
        ))}
      </List>
    );
  }
}

export default BaseComponent(GameEnrollmentList);
