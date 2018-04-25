import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import { UserProfileSection } from 'components/sections';
import NotLoaded from 'user/components/not-loaded';

const User = ({ hasUserLoaded, user, user: { firstName, lastName } }) => (
  <main>
    <Render when={!hasUserLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasUserLoaded}>
      <UserProfileSection title={`${lastName} ${firstName}`} user={user} />
    </Render>
  </main>
);

User.propTypes = {
  hasUserLoaded: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
};

export default User;
