import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'games/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { gamesContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { GamesListSection } from 'components/sections';
import { ButtonAddGame } from 'components/codeball';

const formatUpcomingGameUrl = (id) => `/games/upcoming/${id}`;
const formatPreviousGameUrl = (id) => `/games/previous/${id}`;

class Games extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    previousGames: PropTypes.array.isRequired,
    upcomingGames: PropTypes.array.isRequired
  };

  render() {
    const {
      hasPermission,
      previousGames,
      upcomingGames
    } = this.props;

    return (
      <main>
        <GamesListSection
          title={`Upcoming games (${upcomingGames.length})`}
          games={upcomingGames}
          hideScore={true}
          urlFormatter={formatUpcomingGameUrl}
          buttons={(
            <React.Fragment>
              <Render key="new" when={hasPermission(PERMISSION_ADD_GAME)}>
                <ButtonAddGame />
              </Render>
            </React.Fragment>
          )} />

        <GamesListSection
          title={`Previous games (${previousGames.length})`}
          games={previousGames}
          urlFormatter={formatPreviousGameUrl} />
      </main>
    );
  }
}

export default ContainerComponent(Games, {
  mapStateToProps: gamesContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(actions.games.load());
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
