import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER } from 'constants';
import { usersContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { UsersListSection } from 'components/sections';
import { ButtonAddUser } from 'components/codeball';

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
          buttons={[
            <Render key="add" when={hasPermission(PERMISSION_ADD_USER)}>
              <ButtonAddUser />
            </Render>
          ]} />
      </main>
    );
  }
}

export default ContainerComponent(Users, {
  mapStateToProps: usersContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ actions }) => {
    actions.currentUserLoad();
    actions.usersLoad();
  }
});
