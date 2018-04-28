import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectDisplayValue, selectIsEditing, selectIsValid } from 'enroll-another-user/selectors';
import { Section } from 'components/ui';
import EnrollAnotherUser from './component';

const mapStateToProps = (state) => ({
  canEdit: true,
  displayValue: selectDisplayValue(state),
  isEditable: true,
  isEditing: selectIsEditing(state),
  isValid: selectIsValid(state)
});

const mapDispatchToProps = {
  onCancel: actions.enrollAnotherUser.cancel,
  onEdit: actions.enrollAnotherUser.edit,
  onMount: actions.enrollAnotherUser.reset,
  onSave: actions.enrollAnotherUser.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(EnrollAnotherUser));
