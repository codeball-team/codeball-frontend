import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PitchInfo from 'pitch/components/info/component';
import Date from './date';
import Duration from './duration';
import Time from './time';
import styles from './styles.scss';

const Info = ({ className, game, pitch }) => (
  <div className={classNames(styles.gameInfo, className)}>
    <Date date={game.date} />
    <Time time={game.time} />
    <Duration duration={game.duration} />
    <PitchInfo pitch={pitch} />
  </div>
);

Info.propTypes = {
  className: PropTypes.string,
  game: PropTypes.object.isRequired,
  pitch: PropTypes.object.isRequired
};

export default Info;
