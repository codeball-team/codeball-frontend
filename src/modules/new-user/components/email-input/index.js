import { connect } from 'react-redux';
import { actions } from 'new-user/state';
import { selectEmail, selectEmailDisplayValue, selectEmailIsValid } from 'new-user/selectors';
import { EditableText, Input } from 'components';

const mapStateToProps = (state) => ({
  displayValue: selectEmailDisplayValue(state),
  isEditing: true,
  isValid: selectEmailIsValid(state),
  label: 'Email',
  text: selectEmail(state)
});

const mapDispatchToProps = {
  onChange: actions.changeEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(Input(EditableText));
