import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _, classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { Link } from 'components/ui';
import styles from './styles.scss';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    redirect: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    isDisabled: false,
    onClick: _.noop
  };

  render() {
    const {
      children,
      className,
      isDisabled,
      redirect,
      onClick
    } = this.props;

    const button = (
      <div
        className={classNames(
          styles.button,
          {
            [styles.disabled]: isDisabled
          },
          className
        )}
        onClick={onClick}>
        {children}
      </div>
    );

    if(redirect) {
      return (
        <Link to={redirect}>
          {button}
        </Link>
      );
    }

    return button;
  }
}

export default BaseComponent(Button);
