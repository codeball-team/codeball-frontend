import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectLastName, selectLastNameDisplayValue, selectLastNameIsValid } from 'new-user/selectors';
import { EditableText, Input } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectLastNameDisplayValue(state),
  isEditing: true,
  isValid: selectLastNameIsValid(state),
  label: 'Last name',
  text: selectLastName(state)
});

const mapDispatchToProps = {
  onChange: actions.changeLastName
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(EditableText));
