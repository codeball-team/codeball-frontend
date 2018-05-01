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
  onMount: () => dispatch(actions.reset()),
  onSubmit: () => dispatch(actions.submit()),
  updateData: () => {
    dispatch(currentUserActions.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(NewUser));
