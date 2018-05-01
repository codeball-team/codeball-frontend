import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-pitch/state';
import { selectDataIsLoading, selectIsValid } from 'new-pitch/selectors';
import { Container } from 'components';
import NewPitch from './component';

const mapStateToProps = (state) => ({
  isLoading: selectDataIsLoading(state),
  isValid: selectIsValid(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(actions.newPitch.reset()),
  onSubmit: () => dispatch(actions.newPitch.submit()),
  updateData: () => {
    dispatch(currentUserActions.currentUser.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(NewPitch));
