import { connect } from 'react-redux';
import { actions } from 'game/state';
import { isGameEditingSelector } from 'selectors/models/game';
import { selectCanEditGameScore } from 'current-user/selectors';
import { Section } from 'components/ui';
import Score from './component';

const mapStateToProps = (state) => ({
  canEdit: selectCanEditGameScore(state),
  isEditable: true,
  isEditing: isGameEditingSelector(state)
});

const mapDispatchToProps = {
  onCancel: actions.game.editCancel,
  onEdit: actions.game.edit,
  onSave: actions.game.saveScore
};

export default connect(mapStateToProps, mapDispatchToProps)(Section(Score));
