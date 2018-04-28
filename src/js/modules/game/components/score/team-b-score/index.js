import { connect } from 'react-redux';
import { actions } from 'game/state';
import { selectIsEditing, selectTeamBScore } from 'game/selectors';
import { EditableText } from 'components';

const mapStateToProps = (state) => ({
  isEditing: selectIsEditing(state),
  maxLength: 2,
  text: selectTeamBScore(state)
});

const mapDispatchToProps = {
  onChange: actions.game.changeScoreB
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableText);
