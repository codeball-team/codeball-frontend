import { connect } from 'react-redux';
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
  selectNumberOfNotEnrolledUsers
} from 'game/selectors';
import { Container } from 'components';
import Upcoming from './component';

const mapStateToProps = (state) => ({
  canCloseEnrollment: selectCanCloseEnrollment(state),
  canDrawTeams: selectCanDrawTeams(state),
  canEndGame: selectCanEndGame(state),
  canEnroll: selectCanEnroll(state),
  canEnrollAnotherUser: selectCanEnrollAnotherUser(state),
  hasLoaded: selectHasLoaded(state),
  isEnrollmentOver: selectIsEnrollmentOver(state),
  isGameOver: selectIsGameOver(state),
  isLoading: selectDataIsLoading(state),
  numberOfNotEnrolledUsers: selectNumberOfNotEnrolledUsers(state)
});

const mapDispatchToProps = (dispatch, { id, match }) => ({
  onCloseEnrollment: () => dispatch(actions.game.closeEnrollment()),
  onDrawTeams: () => dispatch(actions.game.drawTeams()),
  onEndGame: () => dispatch(actions.game.end()),
  updateData: () => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.game.load(id || match.params.id));
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Upcoming));
