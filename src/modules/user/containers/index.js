import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'user/state';
import { selectDataIsLoading, selectHasLoaded } from 'user/selectors';
import { Container } from 'components';
import User from './component';

const mapStateToProps = (state) => ({
  hasLoaded: selectHasLoaded(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch, { match }) => ({
  updateData: () => {
    dispatch(currentUserActions.load());
    dispatch(actions.load(match.params.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(User));
