import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'new-user/components/form';
import { CancelButton, SaveButton } from 'components';

class NewUser extends Component {
  static propTypes = {
    isValid: PropTypes.bool,
    onMount: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const { isValid, onSubmit } = this.props;

    return (
      <Form
        buttons={(
          <React.Fragment>
            <CancelButton redirect="/players" />
            <SaveButton isDisabled={!isValid} onClick={onSubmit} />
          </React.Fragment>
        )} />
    );
  }
}

export default NewUser;
