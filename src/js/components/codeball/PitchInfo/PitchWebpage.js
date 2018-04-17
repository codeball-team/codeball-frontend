import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getDomain } from 'utils';
import { BaseComponent } from 'components/base';
import { Icon } from 'components/ui';
import styles from './styles.scss';

class PitchWebpage extends Component {
  static propTypes = {
    url: PropTypes.string
  };

  render() {
    const { url } = this.props;

    return (
      <div className={styles.info} title="Pitch webpage">
        <Icon name="world" />
        <a href={url}>
          {getDomain(url)}
        </a>
      </div>
    );
  }
}

export default BaseComponent(PitchWebpage);
