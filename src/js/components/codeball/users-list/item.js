import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { USER_MISSING_PICTURE_URL } from 'constants';
import { Link, ListItem } from 'components/ui';
import styles from './styles.scss';

const UsersListItem = ({
  children,
  className,
  user: {
    firstName,
    id,
    lastName,
    pictureUrl
  }
}) => (
  <Link to={`/players/${id}`}>
    <ListItem className={classNames(styles.usersListItem, className)}>
      <div
        className={styles.picture}
        style={{
          backgroundImage: `url("${pictureUrl || USER_MISSING_PICTURE_URL}")`
        }} />

      <div className={styles.name}>
        {lastName} {firstName}
      </div>

      {children}
    </ListItem>
  </Link>
);

UsersListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UsersListItem;
