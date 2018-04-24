import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PERMISSION_ADD_GAME, PERMISSION_CLOSE_ENROLLMENT, PERMISSION_DRAW_TEAMS,
  PERMISSION_END_GAME, PERMISSION_ENROLL, PERMISSION_ENROLL_ANOTHER_USER
} from 'constants';
import { actions } from 'game/state';
import { actions as currentUserActions } from 'current-user/state';
import { actions as usersActions } from 'users/state';
import { upcomingGameContainerSelector } from 'selectors/containers';
import { EnrollAnotherUserModel } from 'models';
import { ContainerComponent } from 'components/base';
import { ButtonSave, ButtonShuffle, Render } from 'components/ui';
import {
  GameEnrollAnotherUserFormSection, GameEnrollmentFormSection,
  GameEnrollmentSection, GameInfoSection, GameLineupSection
} from 'components/sections';
import { GameNotLoaded } from 'components/codeball';

class UpcomingGame extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    currentUserId: PropTypes.number,
    enrollAnotherUser: PropTypes.object.isRequired,
    enrolledUsersPerStatus: PropTypes.array.isRequired,
    game: PropTypes.object.isRequired,
    gameId: PropTypes.number,
    hasGameLoaded: PropTypes.bool.isRequired,
    hasPermission: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    isEnrollAnotherUserEditing: PropTypes.bool.isRequired,
    match: PropTypes.object,
    numberOfEnrolledUsers: PropTypes.number.isRequired,
    pitch: PropTypes.object.isRequired,
    selectedEnrollmentStatus: PropTypes.string,
    teamA: PropTypes.array.isRequired,
    teamB: PropTypes.array.isRequired,
    unenrolledUsers: PropTypes.array.isRequired,
    onMount: PropTypes.func.isRequired
  };

  componentWillMount = () => this.props.onMount();

  render() {
    const {
      hasPermission,
      enrollAnotherUser,
      enrolledUsersPerStatus,
      game,
      game: {
        isEnrollmentOver,
        isGameOver
      },
      hasGameLoaded,
      isEnrollAnotherUserEditing,
      numberOfEnrolledUsers,
      pitch,
      pitch: {
        name: pitchName
      },
      selectedEnrollmentStatus,
      teamA,
      teamB,
      unenrolledUsers,
      onCloseEnrollment,
      onDrawTeams,
      onEndGame,
      onEnrollmentStatusChange,
      onEnrollAnotherUserEdit,
      onEnrollAnotherUserCancel,
      onEnrollAnotherUserSubmit,
      onEnrollAnotherUserIdChange
    } = this.props;

    return (
      <main>
        <Render when={!hasGameLoaded}>
          <GameNotLoaded canAddNew={hasPermission(PERMISSION_ADD_GAME)} />
        </Render>

        <Render when={hasGameLoaded}>
          <GameInfoSection
            title={pitchName}
            game={game}
            pitch={pitch}
            buttons={[
              <Render
                key="close-enrollment"
                when={[
                  !isEnrollmentOver,
                  hasPermission(PERMISSION_CLOSE_ENROLLMENT)
                ]}>
                <ButtonSave label="Close enrollment" onClick={onCloseEnrollment} />
              </Render>,

              <Render
                key="draw-teams"
                when={[
                  isEnrollmentOver,
                  !isGameOver,
                  hasPermission(PERMISSION_DRAW_TEAMS)
                ]}>
                <ButtonShuffle label="Draw teams" onClick={onDrawTeams} />
              </Render>,

              <Render
                key="end-game"
                when={[
                  isEnrollmentOver,
                  !isGameOver,
                  hasPermission(PERMISSION_END_GAME)
                ]}>
                <ButtonSave label="End game" onClick={onEndGame} />
              </Render>
            ]} />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            !isEnrollmentOver,
            hasPermission(PERMISSION_ENROLL)
          ]}>
          <GameEnrollmentFormSection
            title="Are you going?"
            enrollmentStatus={selectedEnrollmentStatus}
            onChange={onEnrollmentStatusChange} />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            !isEnrollmentOver,
            unenrolledUsers.length > 0,
            hasPermission(PERMISSION_ENROLL_ANOTHER_USER)
          ]}>
          <GameEnrollAnotherUserFormSection
            title="Enroll another player"
            canEdit={true}
            canSubmit={EnrollAnotherUserModel.isValid(enrollAnotherUser)}
            isEditable={true}
            isEditing={isEnrollAnotherUserEditing}
            enrollAnotherUser={enrollAnotherUser}
            users={unenrolledUsers}
            onEdit={onEnrollAnotherUserEdit}
            onCancel={onEnrollAnotherUserCancel}
            onSave={onEnrollAnotherUserSubmit}
            onUserIdChange={onEnrollAnotherUserIdChange} />
        </Render>

        <Render
          when={[
            hasGameLoaded,
            isEnrollmentOver
          ]}>
          <GameLineupSection
            title="Lineups"
            teamA={teamA}
            teamB={teamB} />
        </Render>

        <Render when={hasGameLoaded}>
          <GameEnrollmentSection
            title={`Enrolled players (${numberOfEnrolledUsers})`}
            enrolledUsersPerStatus={enrolledUsersPerStatus} />
        </Render>
      </main>
    );
  }
}

const mapDispatchToProps = {
  onCloseEnrollment: actions.game.closeEnrollment,
  onDrawTeams: actions.game.drawTeams,
  onEndGame: actions.game.end,
  onEnrollAnotherUserCancel: actions.game.enrollAnotherUserCancel,
  onEnrollAnotherUserEdit: actions.game.enrollAnotherUserEdit,
  onEnrollAnotherUserSubmit: actions.game.enrollAnotherUser,
  onEnrollAnotherUserIdChange: actions.game.enrollAnotherUserChangeUserId,
  onEnrollmentStatusChange: actions.game.changeEnrollmentStatus,
  onMount: actions.game.enrollAnotherUserReset
};

const allActions = actions; // TODO: remove

export default ContainerComponent(UpcomingGame, {
  mapStateToProps: upcomingGameContainerSelector,
  mapDispatchToProps,
  periodicDataUpdates: true,
  updateData: ({ actions, dispatch, id, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(allActions.game.load(id || match.params.id));
    actions.pitchesLoad();
    dispatch(usersActions.users.load());
  }
});
