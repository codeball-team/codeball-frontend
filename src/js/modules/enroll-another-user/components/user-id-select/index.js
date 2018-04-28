import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectUsersOptions } from 'users/selectors';
import { selectUserId, selectUserIdDisplayValue, selectUserIdIsValid } from 'enroll-another-user/selectors';
import { InputWrapper } from 'components/ui';
import UserIdSelect from './component';

const mapStateToProps = (state) => ({
  displayValue: selectUserIdDisplayValue(state),
  isValid: selectUserIdIsValid(state),
  label: 'Player',
  options: selectUsersOptions(state),
  value: selectUserId(state)
});

const mapDispatchToProps = {
  onChange: actions.enrollAnotherUser.changeUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(UserIdSelect));
