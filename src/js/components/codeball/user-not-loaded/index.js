import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded } from 'components/ui';
import { ButtonAddUser } from 'components/codeball';

const UserNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such player">
    <ButtonAddUser renderWhen={canAddNew} label="Add new player" />
  </NotLoaded>
);

UserNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default UserNotLoaded;
