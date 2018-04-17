import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/ui';
import GamesListItem from './item';

const GamesList = ({ className, games, hideScore, urlFormatter }) => (
  <List className={className}>
    {games.map((game, index) => (
      <GamesListItem
        key={index}
        game={game}
        hideScore={hideScore}
        urlFormatter={urlFormatter} />
    ))}
  </List>
);

GamesList.propTypes = {
  className: PropTypes.string,
  games: PropTypes.array.isRequired,
  hideScore: PropTypes.bool,
  urlFormatter: PropTypes.func.isRequired
};

export default GamesList;
