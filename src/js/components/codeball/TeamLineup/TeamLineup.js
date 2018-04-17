import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { UsersList } from 'components/codeball';
import styles from './styles.scss';

class TeamLineup extends Component {
  static propTypes = {
    className: PropTypes.string,
    teamName: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
  };

  render() {
    const { className, teamName, users } = this.props;

    return (
      <div className={classNames(styles.teamLineup, className)}>
        <div className={styles.teamName}>
          {teamName}
        </div>

        <UsersList users={users} />
      </div>
    );
  }
}

export default BaseComponent(TeamLineup);
