import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components';
import AddUserButton from 'new-user/components/add-button';
import List from 'users/components/list';

const Users = ({ canAddNew }) => (
  <main>
    <List
      buttons={(
        <React.Fragment>
          <Render when={canAddNew}>
            <AddUserButton />
          </Render>
        </React.Fragment>
      )} />
  </main>
);

Users.propTypes = {
  canAddNew: PropTypes.bool
};

export default Users;
