import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitch/state';
import { selectDataIsLoading, selectHasLoaded } from 'pitch/selectors';
import { Container } from 'components';
import Pitch from './component';

const mapStateToProps = (state) => ({
  hasLoaded: selectHasLoaded(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  updateData: () => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitch.load(match.params.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Pitch));
