import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'new-pitch/components/form';
import { CancelButton, SaveButton } from 'components/ui';

class NewPitch extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    onMount: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const { isValid, onSubmit } = this.props;

    return (
      <main>
        <Form
          buttons={(
            <React.Fragment>
              <CancelButton redirect="/pitches" />
              <SaveButton isDisabled={!isValid} onClick={onSubmit} />
            </React.Fragment>
          )} />
      </main>
    );
  }
}

export default NewPitch;
