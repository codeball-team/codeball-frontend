import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectAddUserOptions } from 'current-user/selectors';
import { selectRole, selectRoleDisplayValue, selectRoleIsValid } from 'new-user/selectors';
import { Input, ValuePicker } from 'components';
import styles from './styles.scss';

const mapStateToProps = (state) => ({
  childClassName: styles.roleInput,
  displayValue: selectRoleDisplayValue(state),
  isEditing: true,
  isValid: selectRoleIsValid(state),
  label: 'Role',
  options: selectAddUserOptions(state),
  value: selectRole(state)
});

const mapDispatchToProps = {
  onChange: actions.newUser.changeRole
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(ValuePicker));
