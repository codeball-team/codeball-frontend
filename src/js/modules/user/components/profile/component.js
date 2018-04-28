import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from 'components/ui';
import Email from './email';
import Picture from './picture';
import Role from './role';
import styles from './styles.scss';

const UserProfile = ({ className, email, pictureUrl, role }) => (
  <div className={classNames(styles.userProfile, className)}>
    <Picture pictureUrl={pictureUrl} />

    <div className={styles.info}>
      <Role role={role} />
      <Email email={email} />
    </div>
  </div>
);

UserProfile.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  pictureUrl: PropTypes.string,
  role: PropTypes.string
};

export default UserProfile;
