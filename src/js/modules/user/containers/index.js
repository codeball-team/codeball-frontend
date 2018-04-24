import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PERMISSION_ADD_USER } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'user/state';
import { userContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import { Render } from 'components/ui';
import { UserProfileSection } from 'components/sections';
import { UserNotLoaded } from 'components/codeball';

class User extends Component {
  static propTypes = {
    hasPermission: PropTypes.func.isRequired,
    hasUserLoaded: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  };

  render() {
    const {
      hasPermission,
      hasUserLoaded,
      user,
      user: {
        firstName,
        lastName
      }
    } = this.props;

    return (
      <main>
        <Render when={!hasUserLoaded}>
          <UserNotLoaded canAddNew={hasPermission(PERMISSION_ADD_USER)} />
        </Render>

        <Render when={hasUserLoaded}>
          <UserProfileSection title={`${lastName} ${firstName}`} user={user} />
        </Render>
      </main>
    );
  }
}

export default ContainerComponent(User, {
  mapStateToProps: userContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.user.load(match.params.id));
  }
});
