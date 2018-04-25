import React from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER } from 'constants';
import { Render } from 'components/ui';
import { UsersListSection } from 'components/sections';
import { AddUserButton } from 'components/codeball';

const Users = ({ hasPermission, currentUser, users }) => (
  <main>
    <UsersListSection
      title={`Players (${users.length})`}
      currentUser={currentUser}
      users={users}
      buttons={(
        <Render when={hasPermission(PERMISSION_ADD_USER)}>
          <AddUserButton />
        </Render>
      )} />
  </main>
);

Users.propTypes = {
  currentUser: PropTypes.object.isRequired,
  hasPermission: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
