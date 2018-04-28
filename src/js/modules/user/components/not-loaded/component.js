import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded, Render } from 'components';
import AddUserButton from 'new-user/components/add-button';

const UserNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such player">
    <Render when={canAddNew}>
      <AddUserButton label="Add new player" />
    </Render>
  </NotLoaded>
);

UserNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default UserNotLoaded;
