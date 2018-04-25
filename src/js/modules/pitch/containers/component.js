import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import Info from 'pitch/components/info';
import NotLoaded from 'pitch/components/not-loaded';

const Pitch = ({ hasPitchLoaded }) => (
  <main>
    <Render when={!hasPitchLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasPitchLoaded}>
      <Info />
    </Render>
  </main>
);

Pitch.propTypes = {
  hasPitchLoaded: PropTypes.bool.isRequired
};

export default Pitch;
