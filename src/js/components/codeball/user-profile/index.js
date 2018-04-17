import React from 'react';
import PropTypes from 'prop-types';
import { ROLE_STRING, USER_MISSING_PICTURE_URL } from 'constants';
import { classNames } from 'utils';
import { Icon } from 'components/ui';
import styles from './styles.scss';

const UserProfile = ({ className, user: { email, pictureUrl, role } }) => (
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

UserProfile.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UserProfile;
