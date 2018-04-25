import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded, Render } from 'components/ui';
import { AddGameButton } from 'components/codeball';

const GameNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such game">
    <Render when={canAddNew}>
      <AddGameButton label="Add new game" />
    </Render>
  </NotLoaded>
);

GameNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default GameNotLoaded;
