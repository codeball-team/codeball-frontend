import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'utils';
import { BaseComponent } from 'components/base';
import { List } from 'components/ui';
import PitchesListItem from './PitchesListItem';
import styles from './styles.scss';

class PitchesList extends Component {
  static propTypes = {
    className: PropTypes.string,
    pitches: PropTypes.array.isRequired
  };

  render() {
    const { className, pitches } = this.props;

    return (
      <List className={classNames(styles.pitchesList, className)}>
        {pitches.map((pitch, index) => (
          <PitchesListItem key={index} pitch={pitch} />
        ))}
      </List>
    );
  }
}

export default BaseComponent(PitchesList);
