import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from 'components/base';
import { NotLoaded } from 'components/ui';
import { ButtonAddPitch } from 'components/codeball';

class PitchNotLoaded extends Component {
  static propTypes = {
    canAddNew: PropTypes.bool
  };

  render() {
    const { canAddNew } = this.props;

    return (
      <NotLoaded message="There is no such pitch">
        <ButtonAddPitch renderWhen={canAddNew} label="Add new pitch" />
      </NotLoaded>
    );
  }
}

export default BaseComponent(PitchNotLoaded);
