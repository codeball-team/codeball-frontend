import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PITCH_TYPE_STRING } from 'constants';
import { Render } from 'components';
import Address from './address';
import Capacity from './capacity';
import Type from './type';
import Webpage from './webpage';
import styles from './styles.scss';

const Info = ({ className, pitch: { address, maxCapacity, minCapacity, type, url } }) => (
  <div className={classNames(styles.pitchInfo, className)}>
    <Address address={address} />
    <Render when={url}>
      <Webpage url={url} />
    </Render>
    <Render when={PITCH_TYPE_STRING[type]}>
      <Type type={type} />
    </Render>
    <Capacity maxCapacity={maxCapacity} minCapacity={minCapacity} />
  </div>
);

Info.propTypes = {
  className: PropTypes.string,
  pitch: PropTypes.object.isRequired
};

export default Info;
