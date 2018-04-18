import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _, classNames } from 'utils';
import styles from './styles.scss';

class EditableText extends Component {
  static propTypes = {
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isEditing: PropTypes.bool,
    text: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    onChange: PropTypes.func
  };

  static defaultProps = {
    isDisabled: false,
    isEditing: false,
    type: 'text',
    text: '',
    onChange: _.noop
  };

  onChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const {
      className,
      isDisabled,
      isEditing,
      text,
      ...childProps
    } = this.props;

    if (isEditing) {
      return (
        <input
          {...childProps}
          value={String(text === undefined ? '' : text)}
          onChange={this.onChange}
          disabled={isDisabled}
          className={className} />
      );
    }

    return (
      <span className={classNames(styles.editableText, className)}>
        {text}
      </span>
    );
  }
}

export default EditableText;
