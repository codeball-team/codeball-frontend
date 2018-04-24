import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER, ROLE_OPTIONS } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-user/state';
import { newUserContainerSelector } from 'selectors/containers';
import { NewUserModel } from 'models';
import { ContainerComponent } from 'components/base';
import { NewUserSection } from 'components/sections';
import { ButtonCancel, ButtonSave } from 'components/ui';

class NewUser extends Component {
  static propTypes = {
    getPermission: PropTypes.func.isRequired,
    newUser: PropTypes.object.isRequired
  };

  componentWillMount = () => {
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
          buttons={[
            <ButtonCancel
              key="cancel"
              redirect="/players" />,

            <ButtonSave
              key="save"
              isDisabled={!NewUserModel.isValid(newUser)}
              onClick={onSubmit} />
          ]}
          onEmailChange={onEmailChange}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
          onRoleChange={onRoleChange}
          onSubmit={onSubmit} />
      </main>
    );
  }
}

export default ContainerComponent(NewUser, {
  mapStateToProps: newUserContainerSelector,
  mapDispatchToProps: {
    onEmailChange: actions.newUser.changeEmail,
    onFirstNameChange: actions.newUser.changeFirstName,
    onLastNameChange: actions.newUser.changeLastName,
    onMount: actions.newUser.reset,
    onRoleChange: actions.newUser.changeRole,
    onSubmit: actions.newUser.submit
  },
  periodicDataUpdates: true,
  updateData: ({ actions, dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
