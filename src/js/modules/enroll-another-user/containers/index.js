import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectIsEditing } from 'enroll-another-user/selectors';
import { Section } from 'components';
import EnrollAnotherUser from './component';

const mapStateToProps = (state) => ({
  canEdit: true,
  isEditable: true,
  isEditing: selectIsEditing(state)
});

const mapDispatchToProps = {
  onCancel: actions.enrollAnotherUser.cancel,
  onEdit: actions.enrollAnotherUser.edit,
  onMount: actions.enrollAnotherUser.reset,
  onSave: actions.enrollAnotherUser.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(EnrollAnotherUser));
