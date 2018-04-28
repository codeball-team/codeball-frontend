import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectFirstName, selectFirstNameDisplayValue, selectFirstNameIsValid } from 'new-user/selectors';
import { EditableText, InputWrapper } from 'components/ui';

const mapStateToProps = (state) => ({
  displayValue: selectFirstNameDisplayValue(state),
  isEditing: true,
  isValid: selectFirstNameIsValid(state),
  label: 'First name',
  text: selectFirstName(state)
});

const mapDispatchToProps = {
  onChange: actions.newUser.changeFirstName
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(EditableText));