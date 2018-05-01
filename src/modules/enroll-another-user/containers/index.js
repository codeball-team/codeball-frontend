import { connect } from 'react-redux';
import { actions } from 'enroll-another-user/state';
import { selectIsEditing } from 'enroll-another-user/selectors';
import { Section } from 'components';
import EnrollAnotherUser from './component';

const mapStateToProps = (state) => ({
  canEdit: true,
  isEditable: true,
  isEditing: selectIsEditing(state),
  title: 'Enroll another player'
});

const mapDispatchToProps = {
  onCancel: actions.cancel,
  onEdit: actions.edit,
  onMount: actions.reset,
  onSave: actions.submit
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(EnrollAnotherUser));
