import React from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { List } from 'components/ui';
import PitchesListItem from './item';
import styles from './styles.scss';

const PitchesList = ({ className, pitches }) => (
  <List className={classNames(styles.pitchesList, className)}>
    {pitches.map((pitch, index) => (
      <PitchesListItem key={index} pitch={pitch} />
    ))}
  </List>
);

PitchesList.propTypes = {
  className: PropTypes.string,
  pitches: PropTypes.array.isRequired
};

export default PitchesList;
