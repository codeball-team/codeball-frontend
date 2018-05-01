import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NumberPicker } from 'components';
import styles from './styles.scss';

const RangePicker = ({
  className,
  max,
  maxOptions,
  min,
  minOptions,
  separator = '-',
  valueFormatter,
  vertical,
  onMaxChange,
  onMinChange
}) => (
  <div className={classNames(styles.rangePicker, className)}>
    <NumberPicker
      className={styles.minPicker}
      value={min}
      valueFormatter={valueFormatter}
      values={minOptions}
      vertical={vertical}
      onChange={onMinChange} />

    <span className={styles.separator}> {separator} </span>

    <NumberPicker
      className={styles.maxPicker}
      value={max}
      valueFormatter={valueFormatter}
      values={maxOptions}
      vertical={vertical}
      onChange={onMaxChange} />
  </div>
);

RangePicker.propTypes = {
  className: PropTypes.string,
  max: PropTypes.number,
  maxOptions: PropTypes.array,
  min: PropTypes.number,
  minOptions: PropTypes.array,
  separator: PropTypes.string,
  valueFormatter: PropTypes.func,
  vertical: PropTypes.bool,
  onMaxChange: PropTypes.func.isRequired,
  onMinChange: PropTypes.func.isRequired
};

export default RangePicker;
