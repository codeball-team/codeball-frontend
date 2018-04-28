import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectUsersOptions } from 'users/selectors';
import { selectUserId } from 'enroll-another-user/selectors';
import UserIdSelect from './component';

const mapStateToProps = (state) => ({
  options: selectUsersOptions(state),
  value: selectUserId(state)
});

const mapDispatchToProps = {
  onChange: actions.enrollAnotherUser.changeUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIdSelect);
