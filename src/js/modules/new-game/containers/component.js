import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CancelButton, SaveButton } from 'components/ui';
import Form from 'new-game/components/form';

class NewGame extends Component {
  static propTypes = {
    isValid: PropTypes.bool,
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
              <CancelButton redirect="/games" />
              <SaveButton isDisabled={!isValid} onClick={onSubmit} />
            </React.Fragment>
          )} />
      </main>
    );
  }
}

export default NewGame;
