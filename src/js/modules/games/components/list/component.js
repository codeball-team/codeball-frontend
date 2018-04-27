import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/ui';
import Item from './item';

const Games = ({ className, games, hideScore, urlFormatter }) => (
  <List className={className}>
    {games.map((game, index) => (
      <Item
        key={index}
        game={game}
        hideScore={hideScore}
        urlFormatter={urlFormatter} />
    ))}
  </List>
);

Games.propTypes = {
  className: PropTypes.string,
  games: PropTypes.array.isRequired,
  hideScore: PropTypes.bool,
  urlFormatter: PropTypes.func.isRequired
};

export default Games;
