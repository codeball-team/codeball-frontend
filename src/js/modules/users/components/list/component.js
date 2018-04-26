import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/ui';
import Item from './item';

const Users = ({ className, users }) => (
  <List className={className}>
    {users.map((user, index) => (
      <Item key={index} user={user} />
    ))}
  </List>
);

Users.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default Users;
