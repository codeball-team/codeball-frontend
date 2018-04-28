import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List } from 'components';
import Item from './item';
import styles from './styles.scss';

const Pitches = ({ className, pitches }) => (
  <List className={classNames(styles.pitchesList, className)}>
    {pitches.map((pitch, index) => (
      <Item key={index} pitch={pitch} />
    ))}
  </List>
);

Pitches.propTypes = {
  className: PropTypes.string,
  pitches: PropTypes.array.isRequired
};

export default Pitches;
