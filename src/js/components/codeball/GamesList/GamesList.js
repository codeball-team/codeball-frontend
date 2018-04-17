import React, { Component, PropTypes } from 'react';
import { BaseComponent } from 'components/base';
import { List } from 'components/ui';
import { GamesListItem } from 'components/codeball';

class GamesList extends Component {
  static propTypes = {
    className: PropTypes.string,
    games: PropTypes.array.isRequired,
    hideScore: PropTypes.bool,
    urlFormatter: PropTypes.func.isRequired
  };

  render() {
    const { className, games, hideScore, urlFormatter } = this.props;

    return (
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
  }
}

export default BaseComponent(GamesList);
