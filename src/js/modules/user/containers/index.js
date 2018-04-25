import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'user/state';
import { userContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import User from './component';

export default ContainerComponent(User, {
  mapStateToProps: userContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.user.load(match.params.id));
  }
});
