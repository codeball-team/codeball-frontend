import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { _ } from 'utils';
import styles from './styles.scss';

export default class Link extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.node
    ]),
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    onClick: _.noop
  };

  onClick = (...args) => {
    const { to, onClick } = this.props;
    this.context.router.push(to);
    onClick(...args);
  };

  render() {
    const { children } = this.props;

    if(!children) {
      return null;
    }

    const { type } = children;

    if(!type) {
      return (
        <a className={styles.link} onClick={this.onClick}>
          {children}
        </a>
      );
    }

    return cloneElement(children, {
      onClick: this.onClick
    });
  }
}
