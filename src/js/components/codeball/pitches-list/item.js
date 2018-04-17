import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';
import { Link, ListItem } from 'components/ui';
import styles from './styles.scss';

class PitchesListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    pitch: PropTypes.object.isRequired
  };

  render() {
    const {
      children,
      pitch: {
        address,
        id,
        name
      }
    } = this.props;

    return (
      <Link to={`/pitches/${id}`}>
        <ListItem className={styles.pitchesListItem}>
          <div className={styles.name}>
            {name}
          </div>

          <div className={styles.address}>
            {address}
          </div>

          {children}
        </ListItem>
      </Link>
    );
  }
}

export default BaseComponent(PitchesListItem);
