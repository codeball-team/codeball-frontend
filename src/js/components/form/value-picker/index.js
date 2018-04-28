import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ValuePickerOption from './option';
import styles from './styles.scss';

class ValuePicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    optionClassName: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onChange: PropTypes.func.isRequired
  };

  onChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const {
      className,
      optionClassName,
      options,
      value: currentValue
    } = this.props;

    return (
      <div className={classNames(styles.valuePicker, className)}>
        {options.map(({ label, value }, index) => (
          <ValuePickerOption
            key={index}
            className={classNames(
              optionClassName,
              {
                [styles.selected]: value === currentValue
              }
            )}
            label={label}
            value={value}
            onClick={this.onChange} />
        ))}
      </div>
    );
  }
}

export default ValuePicker;
