import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'users/state';
import { usersContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { UsersListSection } from 'components/sections';
import { AddUserButton } from 'components/codeball';

class Users extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    hasPermission: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  render() {
    const {
      hasPermission,
      currentUser,
      users
    } = this.props;

    return (
      <main>
        <UsersListSection
          title={`Players (${users.length})`}
          currentUser={currentUser}
          users={users}
          buttons={(
            <Render key="add" when={hasPermission(PERMISSION_ADD_USER)}>
              <AddUserButton />
            </Render>
          )} />
      </main>
    );
  }
}

export default ContainerComponent(Users, {
  mapStateToProps: usersContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.users.load());
  }
});
