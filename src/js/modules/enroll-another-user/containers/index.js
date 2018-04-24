import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findLabelByValue } from 'utils';
import { EnrollAnotherUserModel } from 'models';
import { Form, Render, Select, Section } from 'components/ui';

class GameEnrollAnotherUserForm extends Component {
  static propTypes = {
    className: PropTypes.string,
    enrollAnotherUser: PropTypes.object,
    isEditing: PropTypes.bool,
    users: PropTypes.array.isRequired,
    onUserIdChange: PropTypes.func.isRequired
  };

  onUserIdChange = ({ value }) => {
    const { onUserIdChange } = this.props;
    onUserIdChange(value);
  };

  render() {
    const {
      className,
      enrollAnotherUser,
      enrollAnotherUser: {
        userId
      },
      isEditing,
      users
    } = this.props;

    const usersOptions = users.map(({ id, firstName, lastName }) => ({
      label: `${lastName} ${firstName}`,
      value: id
    }));

    return (
      <div className={className}>
        <Render when={isEditing}>
          <Form
            inputs={[
              {
                label: 'Player',
                displayValue: findLabelByValue(usersOptions, userId),
                isValid: EnrollAnotherUserModel.isUserIdValid(enrollAnotherUser),
                component: (
                  <Select
                    noResultsText="There are no players"
                    placeholder="Select player..."
                    options={usersOptions}
                    value={userId}
                    searchable={false}
                    clearable={false}
                    onChange={this.onUserIdChange} />
                )
              }
            ]} />
        </Render>
      </div>
    );
  }
}

export default Section(GameEnrollAnotherUserForm);
