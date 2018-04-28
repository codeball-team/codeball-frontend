import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import NotLoaded from 'user/components/not-loaded';
import Profile from 'user/components/profile';

const User = ({ hasLoaded }) => (
  <main>
    <Render when={!hasLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasLoaded}>
      <Profile />
    </Render>
  </main>
);

User.propTypes = {
  hasLoaded: PropTypes.bool.isRequired
};

export default User;
