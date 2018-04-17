import React from 'react';
import PropTypes from 'prop-types';
import { NotLoaded } from 'components/ui';
import { ButtonAddGame } from 'components/codeball';

const GameNotLoaded = ({ canAddNew }) => (
  <NotLoaded message="There is no such game">
    <ButtonAddGame renderWhen={canAddNew} label="Add new game" />
  </NotLoaded>
);

GameNotLoaded.propTypes = {
  canAddNew: PropTypes.bool
};

export default GameNotLoaded;
