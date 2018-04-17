import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PITCH_TYPE_STRING } from 'constants';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class PitchType extends Component {
  static propTypes = {
    type: PropTypes.string
  };

  render() {
    const { type } = this.props;

    return (
      <div className={styles.info} title="Pitch type">
        <Icon name="layers" />
        <a href="http://www.worldsoccershop.com/buyers-guide-boots.html">
          {PITCH_TYPE_STRING[type]}
        </a>
      </div>
    );
  }
}

export default BaseComponent(PitchType);
