import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME, PERMISSION_EDIT_GAME_SCORE } from 'constants';
import { actions } from 'game/state';
import { actions as currentUserActions } from 'current-user/state';
import { actions as usersActions } from 'users/state';
import { gameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { GameLineupSection } from 'components/sections';
import GameScore from 'game/components/score';
import { GameNotLoaded } from 'components/codeball';

class Game extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
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
          <GameScore title="Result" />
        </Render>

        <Render when={hasGameLoaded}>
          <GameLineupSection
            title="Lineups"
            teamA={teamA}
            teamB={teamB} />
        </Render>
      </main>
    );
  }
}

const mapStateToProps = gameContainerSelector;

const mapDispatchToProps = {
  onCancel: actions.game.editCancel,
  onEdit: actions.game.edit,
  onSave: actions.game.saveScore
};

const allActions = actions; // TODO: remove

export default ContainerComponent(Game, {
  mapStateToProps,
  mapDispatchToProps,
  periodicDataUpdates: true,
  updateData: ({ actions, dispatch, id, match }) => {
    dispatch(allActions.game.load(id || match.params.id));
    dispatch(currentUserActions.currentUser.load());
    dispatch(usersActions.users.load());
    // actions.pitchesLoad();
  }
});
