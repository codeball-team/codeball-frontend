import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME, PERMISSION_EDIT_GAME_SCORE } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'game/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { gameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { GameNotLoaded } from 'components/codeball';
import Lineup from 'game/components/lineup';
import Score from 'game/components/score';

class Game extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    hasGameLoaded: PropTypes.bool.isRequired,
    hasPermission: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isGameEditing: PropTypes.bool.isRequired,
    match: PropTypes.object,
    pitch: PropTypes.object.isRequired,
    teamA: PropTypes.array.isRequired,
    teamB: PropTypes.array.isRequired
  };

  render() {
    const {
      game,
      hasGameLoaded,
      hasPermission,
      isGameEditing,
      pitch,
      teamA,
      teamB,
      onCancel,
      onEdit,
      onEditGameScoreA,
      onEditGameScoreB,
      onSave
    } = this.props;

    return (
      <main>
        <Render when={!hasGameLoaded}>
          <GameNotLoaded canAddNew={hasPermission(PERMISSION_ADD_GAME)} />
        </Render>

        <Render when={hasGameLoaded}>
          <Score title="Result" />
          <Lineup title="Lineups" />
        </Render>
      </main>
    );
  }
}

export default ContainerComponent(Game, {
  mapStateToProps: gameContainerSelector,
  mapDispatchToProps: {
    onCancel: actions.game.editCancel,
    onEdit: actions.game.edit,
    onSave: actions.game.saveScore
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch, id, match }) => {
    dispatch(actions.game.load(id || match.params.id));
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
