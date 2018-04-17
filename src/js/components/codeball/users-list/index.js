import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/ui';
import UsersListItem from './item';

const UsersList = ({ className, users }) => (
  <List className={className}>
    {users.map((user, index) => (
      <UsersListItem key={index} user={user} />
    ))}
  </List>
);

UsersList.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersList;
