import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, ListItem } from 'components';
import Picture from './picture';
import Name from './name';
import styles from './styles.scss';

const Item = ({ children, className, user }) => (
  <Link to={`/players/${user.id}`}>
    <ListItem className={classNames(styles.usersListItem, className)}>
      <Picture url={user.pictureUrl} />
      <Name firstName={user.firstName} lastName={user.lastName} />
      {children}
    </ListItem>
  </Link>
);

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Item;
