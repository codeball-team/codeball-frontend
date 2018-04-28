import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Render } from 'components/ui';
import UserIdSelect from 'enroll-another-user/components/user-id-select';

class EnrollAnotherUser extends Component {
  static propTypes = {
    isEditing: PropTypes.bool,
    onMount: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.onMount();

  render() {
    const { isEditing } = this.props;

    return (
      <Render when={isEditing}>
        <Form>
          <UserIdSelect />
        </Form>
      </Render>
    );
  }
}

export default EnrollAnotherUser;
