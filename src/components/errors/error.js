import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'components';
import styles from './styles.scss';

class Error extends Component {
  static propTypes = {
    className: PropTypes.string,
    error: PropTypes.object.isRequired,
    errorIndex: PropTypes.number.isRequired,
    onErrorAcknowledge: PropTypes.func.isRequired
  };

  onErrorAcknowledge = () => {
    const { onErrorAcknowledge, errorIndex } = this.props;
    onErrorAcknowledge(errorIndex);
  };

  render() {
    const { className, error: { title, message } } = this.props;

    return (
      <div className={classNames(styles.error, className)}>
        <div className={styles.header}>
          <div className={styles.title}>
            {title}
          </div>

          <Button className={styles.dismiss} onClick={this.onErrorAcknowledge}>
            <span className={styles.icon}>&times;</span>
            <span className={styles.label}>Dismiss</span>
          </Button>
        </div>

        <div className={styles.message}>
          {message}
        </div>
      </div>
    );
  }
}

export default Error;
