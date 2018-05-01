import { connect } from 'react-redux';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'users/state';
import { selectCanAddUser } from 'current-user/selectors';
import { selectDataIsLoading } from 'users/selectors';
import { Container } from 'components';
import Users from './component';

const mapStateToProps = (state) => ({
  canAddNew: selectCanAddUser(state),
  isLoading: selectDataIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateData: () => {
    dispatch(currentUserActions.load());
    dispatch(actions.load());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container(Users));
