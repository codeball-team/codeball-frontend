import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import { UserProfileSection } from 'components/sections';
import NotLoaded from 'user/components/not-loaded';

const User = ({ hasLoaded, user, user: { firstName, lastName } }) => (
  <main>
    <Render when={!hasLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasLoaded}>
      <UserProfileSection title={`${lastName} ${firstName}`} user={user} />
    </Render>
  </main>
);

User.propTypes = {
  hasLoaded: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
