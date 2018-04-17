import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatRange } from 'utils';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class PitchCapacity extends Component {
  static propTypes = {
    maxNumberOfPlayers: PropTypes.number,
    minNumberOfPlayers: PropTypes.number
  };

  render() {
    const { minNumberOfPlayers, maxNumberOfPlayers } = this.props;
    const capacity = formatRange(minNumberOfPlayers, maxNumberOfPlayers);

    return (
      <div className={styles.info} title="Pitch capacity">
        <Icon name="people" />
        {capacity}
      </div>
    );
  }
}

export default BaseComponent(PitchCapacity);
