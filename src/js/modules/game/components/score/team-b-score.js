import { connect } from 'react-redux';
import { classNames } from 'utils';
import { actions } from 'game/state';
import { isGameEditingSelector, selectTeamBScore } from 'selectors/models/game';
import { EditableText } from 'components/ui';
import styles from './styles.scss';

const mapStateToProps = (state) => ({
  className: classNames(styles.teamScore, styles.scoreB),
  isEditing: isGameEditingSelector(state),
  text: selectTeamBScore(state),
  maxLength: 2
});

const mapDispatchToProps = {
  onChange: actions.game.changeScoreB
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableText);
