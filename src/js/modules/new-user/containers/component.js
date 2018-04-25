import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER, ROLE_OPTIONS } from 'constants';
import { NewUserModel } from 'models';
import { NewUserSection } from 'components/sections';
import { CancelButton, SaveButton } from 'components/ui';

class NewUser extends Component {
  static propTypes = {
    getPermission: PropTypes.func.isRequired,
    newUser: PropTypes.object.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onFirstNameChange: PropTypes.func.isRequired,
    onLastNameChange: PropTypes.func.isRequired,
    onMount: PropTypes.func.isRequired,
    onRoleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.onMount();
  };

  render() {
    const {
      getPermission,
      newUser,
      onEmailChange,
      onFirstNameChange,
      onLastNameChange,
      onRoleChange,
      onSubmit
    } = this.props;
    const rule = getPermission(PERMISSION_ADD_USER);
    const roleOptions = ROLE_OPTIONS.filter(({ value }) => rule.includes(value));

    return (
      <main>
        <NewUserSection
          title="New player"
          newUser={newUser}
          roleOptions={roleOptions}
          buttons={(
            <React.Fragment>
              <CancelButton redirect="/players" />
              <SaveButton
                isDisabled={!NewUserModel.isValid(newUser)}
                onClick={onSubmit} />
            </React.Fragment>
          )}
          onEmailChange={onEmailChange}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
          onRoleChange={onRoleChange}
          onSubmit={onSubmit} />
      </main>
    );
  }
}

export default NewUser;
