import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'games/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { selectCanAddGame } from 'current-user/selectors';
import { selectDataIsLoading } from 'games/selectors';
import { Container } from 'components';
import Games from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddGame(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateData: () => {
    dispatch(actions.games.load());
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Games));
