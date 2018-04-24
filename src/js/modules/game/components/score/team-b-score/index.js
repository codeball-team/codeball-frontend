import { connect } from 'react-redux';
import { actions } from 'game/state';
import { isGameEditingSelector, selectTeamBScore } from 'selectors/models/game';
import { EditableText } from 'components/ui';

const mapStateToProps = (state) => ({
  isEditing: isGameEditingSelector(state),
  text: selectTeamBScore(state),
  maxLength: 2
});

const mapDispatchToProps = {
  onChange: actions.game.changeScoreB
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableText);
