import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Render } from 'components/ui';
import UserIdSelect from 'enroll-another-user/components/user-id-select';

class EnrollAnotherUser extends Component {
  static propTypes = {
    className: PropTypes.string,
    displayValue: PropTypes.string,
    isEditing: PropTypes.bool,
    isValid: PropTypes.bool,
    onMount: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const { className, displayValue, isEditing, isValid } = this.props;

    return (
      <div className={className}>
        <Render when={isEditing}>
          <Form
            inputs={[
              {
                label: 'Player',
                displayValue,
                isValid,
                component: (
                  <UserIdSelect />
                )
              }
            ]} />
        </Render>
      </div>
    );
  }
}

export default EnrollAnotherUser;
