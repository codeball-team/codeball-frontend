import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { connect } from 'react-redux';
import { actions } from 'game/state';
import { isGameEditingSelector } from 'selectors/models/game';
import { selectCanEditGameScore } from 'current-user/selectors';
import { Section } from 'components/ui';
import Date from './date';
import Pitch from './pitch';
import TeamAScore from './team-a-score';
import TeamBScore from './team-b-score';
import Time from './time';
import styles from './styles.scss';

const GameScore = ({ className }) => (
  <div className={classNames(styles.gameScore, className)}>
    <div className={styles.score}>
      <TeamAScore />
      <span> : </span>
      <TeamBScore />
    </div>

    <Pitch />
    <Date />
    <Time />
  </div>
);

GameScore.propTypes = {
  className: PropTypes.string
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Section(GameScore));
