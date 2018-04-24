import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PERMISSION_ADD_GAME, PERMISSION_CLOSE_ENROLLMENT, PERMISSION_DRAW_TEAMS,
  PERMISSION_END_GAME, PERMISSION_ENROLL, PERMISSION_ENROLL_ANOTHER_USER
} from 'constants';
import { actions } from 'game/state';
import { actions as currentUserActions } from 'current-user/state';
import { actions as enrollAnotherUserActions } from 'enroll-another-user/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { upcomingGameContainerSelector } from 'selectors/containers';
import { EnrollAnotherUserModel } from 'models';
import { ContainerComponent } from 'components/base';
import { ButtonSave, ButtonShuffle, Render } from 'components/ui';
import {
  GameEnrollmentFormSection,
  GameEnrollmentSection, GameInfoSection,
} from 'components/sections';
import GameEnrollAnotherUserFormSection from 'enroll-another-user/containers';
import { GameNotLoaded } from 'components/codeball';
import Lineup from 'game/components/lineup';

class UpcomingGame extends Component {
  static propTypes = {
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
            buttons={(
              <React.Fragment>
                <Render
                  when={[
                    !isEnrollmentOver,
                    hasPermission(PERMISSION_CLOSE_ENROLLMENT)
                  ]}>
                  <ButtonSave label="Close enrollment" onClick={onCloseEnrollment} />
                </Render>
                <Render
                  when={[
                    isEnrollmentOver,
                    !isGameOver,
                    hasPermission(PERMISSION_DRAW_TEAMS)
                  ]}>
                  <ButtonShuffle label="Draw teams" onClick={onDrawTeams} />
                </Render>
                <Render
                  when={[
                    isEnrollmentOver,
                    !isGameOver,
                    hasPermission(PERMISSION_END_GAME)
                  ]}>
                  <ButtonSave label="End game" onClick={onEndGame} />
                </Render>
              </React.Fragment>
            )} />
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
          <Lineup title="Lineups" />
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

export default ContainerComponent(UpcomingGame, {
  mapStateToProps: upcomingGameContainerSelector,
  mapDispatchToProps: {
    onCloseEnrollment: actions.game.closeEnrollment,
    onDrawTeams: actions.game.drawTeams,
    onEndGame: actions.game.end,
    onEnrollAnotherUserCancel: enrollAnotherUserActions.enrollAnotherUser.cancel,
    onEnrollAnotherUserEdit: enrollAnotherUserActions.enrollAnotherUser.edit,
    onEnrollAnotherUserSubmit: enrollAnotherUserActions.enrollAnotherUser.submit,
    onEnrollAnotherUserIdChange: enrollAnotherUserActions.enrollAnotherUser.changeUserId,
    onEnrollmentStatusChange: actions.game.changeEnrollmentStatus,
    onMount: enrollAnotherUserActions.enrollAnotherUser.reset
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch, id, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.game.load(id || match.params.id));
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
