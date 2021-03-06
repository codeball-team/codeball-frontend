import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectNotEnrolledUsersOptions } from 'game/selectors';
import {
  selectUserId,
  selectUserIdDisplayValue,
  selectUserIdIsValid
} from 'enroll-another-user/selectors';
import { Input } from 'components';
import UserIdSelect from './component';

const mapStateToProps = (state) => ({
  displayValue: selectUserIdDisplayValue(state),
  isValid: selectUserIdIsValid(state),
  label: 'Player',
  options: selectNotEnrolledUsersOptions(state),
  value: selectUserId(state)
});

const mapDispatchToProps = {
  onChange: actions.changeUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(UserIdSelect));
