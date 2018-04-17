import React, { Component, PropTypes } from 'react';
import { ROLE_STRING, USER_MISSING_PICTURE_URL } from 'constants';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class UserProfile extends Component {
  static propTypes = {
    className: PropTypes.string,
    user: PropTypes.object.isRequired
  };

  render() {
    const {
      className,
      user: {
        email,
        pictureUrl,
        role
      }
    } = this.props;

    return (
      <div className={classNames(styles.userProfile, className)}>
        <div
          className={styles.picture}
          style={{
            backgroundImage: `url("${pictureUrl || USER_MISSING_PICTURE_URL}")`
          }} />

        <div className={styles.info}>
          <div className={styles.infoRow} title="Role">
            <Icon name="access" />
            {ROLE_STRING[role]}
          </div>

          <div className={styles.infoRow} title="Email">
            <Icon name="email" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseComponent(UserProfile);
