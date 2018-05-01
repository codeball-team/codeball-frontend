import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components';
import Lineup from 'game/components/lineup';
import NotLoaded from 'game/components/not-loaded';
import Score from 'game/components/score';

const Previous = ({ hasLoaded }) => (
  <main>
    <Render when={!hasLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasLoaded}>
      <Score />
      <Lineup />
    </Render>
  </main>
);

Previous.propTypes = {
  hasLoaded: PropTypes.bool.isRequired
};

export default Previous;
