import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';
import { NotLoaded } from 'components/ui';
import { ButtonAddGame } from 'components/codeball';

class GameNotLoaded extends Component {
  static propTypes = {
    canAddNew: PropTypes.bool
  };

  render() {
    const { canAddNew } = this.props;

    return (
      <NotLoaded message="There is no such game">
        <ButtonAddGame renderWhen={canAddNew} label="Add new game" />
      </NotLoaded>
    );
  }
}

export default BaseComponent(GameNotLoaded);
