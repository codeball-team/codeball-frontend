import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class GameDate extends Component {
  static propTypes = {
    date: PropTypes.string
  };

  render() {
    const { date } = this.props;

    return (
      <div className={styles.value} title="Game date">
        <Icon name="calendar" />
        {date}
      </div>
    );
  }
}

export default BaseComponent(GameDate);
