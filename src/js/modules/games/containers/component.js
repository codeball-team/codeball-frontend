import React from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME } from 'constants';
import { Render } from 'components/ui';
import { GamesListSection } from 'components/sections';
import { AddGameButton } from 'components/codeball';

const formatUpcomingGameUrl = (id) => `/games/upcoming/${id}`;
const formatPreviousGameUrl = (id) => `/games/previous/${id}`;

const Games = ({ hasPermission, previousGames, upcomingGames }) => (
  <main>
    <GamesListSection
      title={`Upcoming games (${upcomingGames.length})`}
      games={upcomingGames}
      hideScore={true}
      urlFormatter={formatUpcomingGameUrl}
      buttons={(
        <React.Fragment>
          <Render when={hasPermission(PERMISSION_ADD_GAME)}>
            <AddGameButton />
          </Render>
        </React.Fragment>
      )} />

    <GamesListSection
      title={`Previous games (${previousGames.length})`}
      games={previousGames}
      urlFormatter={formatPreviousGameUrl} />
  </main>
);

Games.propTypes = {
  hasPermission: PropTypes.func.isRequired,
  previousGames: PropTypes.array.isRequired,
  upcomingGames: PropTypes.array.isRequired
};

export default Games;
