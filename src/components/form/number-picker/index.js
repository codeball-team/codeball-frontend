import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, EditableText, Icon } from 'components';
import styles from './styles.scss';

class NumberPicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    valueFormatter: PropTypes.func,
    values: PropTypes.array.isRequired,
    vertical: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    valueFormatter: String
  };

  onAdd = () => {
    this.onChange(1);
  };

  onSubtract = () => {
    this.onChange(-1);
  };

  onChange = (step) => {
    const { value, values, onChange } = this.props;
    const numberOfValues = values.length;
    const indexOfValue = values.indexOf(value);
    const indexOfNewValue = (indexOfValue + step + numberOfValues) % numberOfValues;
    const newValue = values[indexOfNewValue];
    onChange(newValue);
  };

  render() {
    const { className, value, valueFormatter, vertical } = this.props;

    return (
      <div
        className={classNames(
          styles.numberPicker,
          {
            [styles.vertical]: vertical
          },
          className
        )}>
        <Button className={styles.subtract} onClick={this.onSubtract}>
          <Icon name="subtract" />
        </Button>

        <EditableText
          className={styles.value}
          isDisabled={true}
          isEditing={true}
          text={valueFormatter(value)} />

        <Button className={styles.add} onClick={this.onAdd}>
          <Icon name="add" />
        </Button>
      </div>
    );
  }
}

export default NumberPicker;
