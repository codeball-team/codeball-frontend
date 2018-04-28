import { connect } from 'react-redux';
import { actions } from 'new-pitch/state';
import { selectName, selectNameDisplayValue, selectNameIsValid } from 'new-pitch/selectors';
import { EditableText, InputWrapper } from 'components/ui';

const mapStateToProps = (state) => ({
  displayValue: selectNameDisplayValue(state),
  isEditing: true,
  isValid: selectNameIsValid(state),
  label: 'Name',
  text: selectName(state)
});

const mapDispatchToProps = {
  onChange: actions.newPitch.changeName
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWrapper(EditableText));
