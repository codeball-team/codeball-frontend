import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'underscore';
import { PITCH_TYPE_STRING } from 'constants';
import { Render } from 'components';
import PitchAddress from './address';
import PitchCapacity from './capacity';
import PitchType from './type';
import PitchWebpage from './webpage';
import styles from './styles.scss';

const Info = ({ className, pitch: { address, maxCapacity, minCapacity, type, url } }) => (
  <div className={classNames(styles.pitchInfo, className)}>
    <PitchAddress address={address} />
    <Render when={!_.isUndefined(url)}>
      <PitchWebpage url={url} />
    </Render>
    <Render when={!_.isUndefined(PITCH_TYPE_STRING[type])}>
      <PitchType type={type} />
    </Render>
    <PitchCapacity maxCapacity={maxCapacity} minCapacity={minCapacity} />
  </div>
);

Info.propTypes = {
  className: PropTypes.string,
  pitch: PropTypes.object.isRequired
};

export default Info;
