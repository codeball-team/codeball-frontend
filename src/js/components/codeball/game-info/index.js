import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { PitchInfo } from 'components/codeball';
import GameDate from './date';
import GameDuration from './duration';
import GameTime from './time';
import styles from './styles.scss';

const GameInfo = ({ className, game: { date, duration, time }, pitch }) => (
  <div className={classNames(styles.gameInfo, className)}>
    <GameDate date={date} />
    <GameTime time={time} />
    <GameDuration duration={duration} />
    <PitchInfo pitch={pitch} />
  </div>
);

GameInfo.propTypes = {
  className: PropTypes.string,
  game: PropTypes.object.isRequired,
  pitch: PropTypes.object.isRequired
};

export default GameInfo;
