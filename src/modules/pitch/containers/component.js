import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components';
import Info from 'pitch/components/info';
import NotLoaded from 'pitch/components/not-loaded';

const Pitch = ({ hasLoaded }) => (
  <main>
    <Render when={!hasLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasLoaded}>
      <Info />
    </Render>
  </main>
);

Pitch.propTypes = {
  hasLoaded: PropTypes.bool.isRequired
};

export default Pitch;
