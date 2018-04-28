import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectLastName, selectLastNameDisplayValue, selectLastNameIsValid } from 'new-user/selectors';
import { EditableText, InputWrapper } from 'components/ui';

const mapStateToProps = (state) => ({
  displayValue: selectLastNameDisplayValue(state),
  isEditing: true,
  isValid: selectLastNameIsValid(state),
  label: 'Last name',
  text: selectLastName(state)
});

const mapDispatchToProps = {
  onChange: actions.newUser.changeLastName
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(EditableText));
