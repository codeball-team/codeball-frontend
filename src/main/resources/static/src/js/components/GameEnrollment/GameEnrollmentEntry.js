import React, { Component, PropTypes } from 'react';
import { ListItem } from 'components';
import classNames from 'classnames';

export default class GameEnrollmentEntry extends Component {
  static propTypes = {
    className: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    enrollmentStatus: PropTypes.string.isRequired
  };

  render() {
    const {
      className,
      firstName,
      lastName,
      enrollmentStatus
    } = this.props;

    return (
      <ListItem
        className={classNames(
          'game-enrollment-entry',
          className
        )}>
        <div className="name ellipsis">
          {firstName} {lastName}
        </div>
         <div className="enrollment-status">
          {enrollmentStatus}
        </div>
      </ListItem>
    );
  }
}
