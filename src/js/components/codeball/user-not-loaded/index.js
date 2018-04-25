import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded, Render } from 'components/ui';
import { AddUserButton } from 'components/codeball';

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
