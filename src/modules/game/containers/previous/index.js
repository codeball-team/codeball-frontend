import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'game/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { selectHasLoaded, selectDataIsLoading } from 'game/selectors';
import { Container } from 'components';
import Previous from './component';

const mapStateToProps = (state) => ({
  hasLoaded: selectHasLoaded(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch, { id, match }) => ({
  updateData: () => {
    dispatch(actions.load(id || match.params.id));
    dispatch(currentUserActions.load());
    dispatch(pitchesActions.load());
    dispatch(usersActions.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Previous));

