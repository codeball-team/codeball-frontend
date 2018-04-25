import { connect } from 'react-redux';
import { actions } from 'game/state';
import { selectCanEditGameScore } from 'current-user/selectors';
import { selectIsEditing } from 'game/selectors';
import { Section } from 'components/ui';
import Score from './component';

const mapStateToProps = (state) => ({
  canEdit: selectCanEditGameScore(state),
  isEditable: true,
  isEditing: selectIsEditing(state)
});

const mapDispatchToProps = {
  onCancel: actions.game.editCancel,
  onEdit: actions.game.edit,
  onSave: actions.game.saveScore
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(Score));
