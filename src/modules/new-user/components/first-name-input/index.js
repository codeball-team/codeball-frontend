import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectFirstName, selectFirstNameDisplayValue, selectFirstNameIsValid } from 'new-user/selectors';
import { EditableText, Input } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectFirstNameDisplayValue(state),
  isEditing: true,
  isValid: selectFirstNameIsValid(state),
  label: 'First name',
  text: selectFirstName(state)
});

const mapDispatchToProps = {
  onChange: actions.changeFirstName
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(EditableText));
