import React, { Component, PropTypes } from 'react';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { NumberPicker } from 'components/ui';
import styles from './styles.scss';

class RangePicker extends Component {
  static propTypes = {
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

  static defaultProps = {
    separator: '-'
  };

  render() {
    const {
      className,
      max,
      maxOptions,
      min,
      minOptions,
      separator,
      valueFormatter,
      vertical,
      onMaxChange,
      onMinChange
    } = this.props;

    return (
      <div className={classNames(styles.rangePicker, className)}>
        <NumberPicker
          className={styles.minPicker}
          values={minOptions}
          value={min}
          valueFormatter={valueFormatter}
          vertical={vertical}
          onChange={onMinChange} />

        <span className={styles.separator}> {separator} </span>

        <NumberPicker
          className={styles.maxPicker}
          values={maxOptions}
          value={max}
          valueFormatter={valueFormatter}
          vertical={vertical}
          onChange={onMaxChange} />
      </div>
    );
  }
}

export default BaseComponent(RangePicker);
