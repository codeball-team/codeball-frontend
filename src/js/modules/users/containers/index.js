import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'users/state';
import { selectCanAddUser } from 'current-user/selectors';
import { selectDataIsLoading } from 'users/selectors';
import { ContainerComponent } from 'components';
import Users from './component';

export default ContainerComponent(Users, {
  mapStateToProps: (state) => ({
    canAddNew: selectCanAddUser(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.users.load());
  }
});
