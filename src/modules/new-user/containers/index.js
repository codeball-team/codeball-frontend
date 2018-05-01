import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-user/state';
import { selectDataIsLoading, selectIsValid } from 'new-user/selectors';
import { Container } from 'components';
import NewUser from './component';

const mapStateToProps = (state) => ({
  isLoading: selectDataIsLoading(state),
  isValid: selectIsValid(state)
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(actions.newUser.reset()),
  onSubmit: () => dispatch(actions.newUser.submit()),
  updateData: () => {
    dispatch(currentUserActions.currentUser.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(NewUser));
