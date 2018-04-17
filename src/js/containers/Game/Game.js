import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_GAME, PERMISSION_EDIT_GAME_SCORE } from 'constants';
import { gameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { GameLineupSection, GameScoreSection } from 'components/sections';
import { GameNotLoaded } from 'components/codeball';

export default function GenerateGame(getGameId) {
  class Game extends Component {
    static propTypes = {
      actions: PropTypes.object.isRequired,
      game: PropTypes.object.isRequired,
      hasGameLoaded: PropTypes.bool.isRequired,
      hasPermission: PropTypes.func.isRequired,
      isGameEditing: PropTypes.bool.isRequired,
      pitch: PropTypes.object.isRequired,
      teamA: PropTypes.array.isRequired,
      teamB: PropTypes.array.isRequired
    };

    onCancel = () => {
      const { actions: { gameEditCancel } } = this.props;
      gameEditCancel();
    };

    onEdit = () => {
      const { actions: { gameEdit } } = this.props;
      gameEdit();
    };

    onEditGameScoreA = teamAScore => {
      const { actions: { gameEditScoreA } } = this.props;
      gameEditScoreA(teamAScore);
    };

    onEditGameScoreB = teamBScore => {
      const { actions: { gameEditScoreB } } = this.props;
      gameEditScoreB(teamBScore);
    };

    onSave = () => {
      const {
        actions: {
          gameSetScore
        },
        game: {
          id: gameId,
          teamAScore,
          teamBScore
        }
      } = this.props;
      gameSetScore(gameId, teamAScore, teamBScore);
    };

    render() {
      const {
        game,
        hasGameLoaded,
        hasPermission,
        isGameEditing,
        pitch,
        teamA,
        teamB
      } = this.props;

      return (
        <main>
          <Render when={!hasGameLoaded}>
            <GameNotLoaded canAddNew={hasPermission(PERMISSION_ADD_GAME)} />
          </Render>

          <Render when={hasGameLoaded}>
            <GameScoreSection
              title="Result"
              canEdit={hasPermission(PERMISSION_EDIT_GAME_SCORE)}
              isEditable={true}
              isEditing={isGameEditing}
              pitch={pitch}
              game={game}
              onEdit={this.onEdit}
              onCancel={this.onCancel}
              onSave={this.onSave}
              onEditGameScoreA={this.onEditGameScoreA}
              onEditGameScoreB={this.onEditGameScoreB} />
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

  return ContainerComponent(Game, {
    mapStateToProps: gameContainerSelector,
    periodicDataUpdates: true,
    updateData: ({ actions, ...props }) => {
      actions.currentUserLoad();
      actions.gameLoad(getGameId(props));
      actions.pitchesLoad();
      actions.usersLoad();
    }
  });
}
