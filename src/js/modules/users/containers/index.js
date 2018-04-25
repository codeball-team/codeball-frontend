import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'users/state';
import { usersContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Users from './component';

export default ContainerComponent(Users, {
  mapStateToProps: usersContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.users.load());
  }
});
