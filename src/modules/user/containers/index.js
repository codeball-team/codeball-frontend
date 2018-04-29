import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'user/state';
import { selectDataIsLoading, selectHasLoaded } from 'user/selectors';
import { ContainerComponent } from 'components';
import User from './component';

export default ContainerComponent(User, {
  mapStateToProps: (state) => ({
    hasLoaded: selectHasLoaded(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.user.load(match.params.id));
  }
});
