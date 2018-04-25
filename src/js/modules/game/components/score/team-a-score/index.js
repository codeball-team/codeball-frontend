import { connect } from 'react-redux';
import { actions } from 'game/state';
import { selectIsEditing, selectTeamAScore } from 'game/selectors';
import { EditableText } from 'components/ui';

const mapStateToProps = (state) => ({
  isEditing: selectIsEditing(state),
  maxLength: 2,
  text: selectTeamAScore(state)
});

const mapDispatchToProps = {
  onChange: actions.game.changeScoreA
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableText);
