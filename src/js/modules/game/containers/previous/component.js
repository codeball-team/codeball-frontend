import React from 'react';
import PropTypes from 'prop-types';
import { Render } from 'components/ui';
import Lineup from 'game/components/lineup';
import NotLoaded from 'game/components/not-loaded';
import Score from 'game/components/score';

const Previous = ({ hasGameLoaded }) => (
  <main>
    <Render when={!hasGameLoaded}>
      <NotLoaded />
    </Render>

    <Render when={hasGameLoaded}>
      <Score title="Result" />
      <Lineup title="Lineups" />
    </Render>
  </main>
);

Previous.propTypes = {
  hasGameLoaded: PropTypes.bool.isRequired
};

export default Previous;
