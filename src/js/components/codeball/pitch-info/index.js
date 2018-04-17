import React from 'react';
import PropTypes from 'prop-types';
import { PITCH_TYPE_STRING } from 'constants';
import { _, classNames } from 'utils';
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
    <PitchWebpage
      renderWhen={!_.isUndefined(url)}
      url={url} />
    <PitchType
      renderWhen={!_.isUndefined(PITCH_TYPE_STRING[type])}
      type={type} />
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
