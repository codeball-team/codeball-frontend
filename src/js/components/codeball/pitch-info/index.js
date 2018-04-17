import React from 'react';
import PropTypes from 'prop-types';
import { PITCH_TYPE_STRING } from 'constants';
import { _, classNames } from 'utils';
import { Render } from 'components/ui';
import PitchAddress from './address';
import PitchCapacity from './capacity';
import PitchType from './type';
import PitchWebpage from './webpage';
import styles from './styles.scss';

const PitchInfo = ({
  className,
  pitch: {
    address,
    maxNumberOfPlayers,
    minNumberOfPlayers,
    type,
    url
  }
}) => (
  <div className={classNames(styles.pitchInfo, className)}>
    <PitchAddress address={address} />
    <Render when={!_.isUndefined(url)}>
      <PitchWebpage url={url} />
    </Render>
    <Render when={!_.isUndefined(PITCH_TYPE_STRING[type])}>
      <PitchType type={type} />
    </Render>
    <PitchCapacity
      minNumberOfPlayers={minNumberOfPlayers}
      maxNumberOfPlayers={maxNumberOfPlayers} />
  </div>
);

PitchInfo.propTypes = {
  className: PropTypes.string,
  pitch: PropTypes.object.isRequired
};

export default PitchInfo;
