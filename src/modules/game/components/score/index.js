import { connect } from 'react-redux';
import { actions } from 'game/state';
import { selectCanEditGameScore } from 'current-user/selectors';
import { selectIsEditing } from 'game/selectors';
import { Section } from 'components';
import Score from './component';

const mapStateToProps = (state) => ({
  canEdit: selectCanEditGameScore(state),
  isEditable: true,
  isEditing: selectIsEditing(state),
  title: 'Result'
});

const mapDispatchToProps = {
  onCancel: actions.editCancel,
  onEdit: actions.edit,
  onSave: actions.saveScore
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(Score));
