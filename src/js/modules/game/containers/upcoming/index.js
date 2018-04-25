import { actions } from 'game/state';
import { actions as currentUserActions } from 'current-user/state';
import { actions as enrollAnotherUserActions } from 'enroll-another-user/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { upcomingGameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Upcoming from './component';

export default ContainerComponent(Upcoming, {
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
