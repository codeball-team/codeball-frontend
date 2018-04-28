import { actions } from 'game/state';
import { actions as currentUserActions } from 'current-user/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import {
  selectCanCloseEnrollment,
  selectCanDrawTeams,
  selectCanEndGame,
  selectCanEnroll,
  selectCanEnrollAnotherUser
} from 'current-user/selectors';
import {
  selectHasLoaded,
  selectDataIsLoading,
  selectIsEnrollmentOver,
  selectIsGameOver,
  selectNumberOfEnrolledUsers,
  selectNumberOfNotEnrolledUsers
} from 'game/selectors';
import { ContainerComponent } from 'components/base';
import Upcoming from './component';

export default ContainerComponent(Upcoming, {
  mapStateToProps: (state) => ({
    canCloseEnrollment: selectCanCloseEnrollment(state),
    canDrawTeams: selectCanDrawTeams(state),
    canEndGame: selectCanEndGame(state),
    canEnroll: selectCanEnroll(state),
    canEnrollAnotherUser: selectCanEnrollAnotherUser(state),
    hasLoaded: selectHasLoaded(state),
    isEnrollmentOver: selectIsEnrollmentOver(state),
    isGameOver: selectIsGameOver(state),
    isLoading: selectDataIsLoading(state),
    numberOfEnrolledUsers: selectNumberOfEnrolledUsers(state),
    numberOfNotEnrolledUsers: selectNumberOfNotEnrolledUsers(state)
  }),
  mapDispatchToProps: {
    onCloseEnrollment: actions.game.closeEnrollment,
    onDrawTeams: actions.game.drawTeams,
    onEndGame: actions.game.end
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch, id, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.game.load(id || match.params.id));
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
