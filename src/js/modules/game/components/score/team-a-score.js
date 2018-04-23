import { connect } from 'react-redux';
import { classNames } from 'utils';
import { actions } from 'game/state';
import { isGameEditingSelector, selectTeamAScore } from 'selectors/models/game';
import { EditableText } from 'components/ui';
import styles from './styles.scss';

const mapStateToProps = (state) => ({
  className: classNames(styles.teamScore, styles.scoreA),
  isEditing: isGameEditingSelector(state),
  text: selectTeamAScore(state),
  maxLength: 2
});

const mapDispatchToProps = {
  onChange: actions.game.changeScoreA
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableText);
