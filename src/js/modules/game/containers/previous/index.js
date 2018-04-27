import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'game/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { selectHasLoaded, selectDataIsLoading } from 'game/selectors';
import { ContainerComponent } from 'components/base';
import Previous from './component';

export default ContainerComponent(Previous, {
  mapStateToProps: (state) => ({
    hasLoaded: selectHasLoaded(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch, id, match }) => {
    dispatch(actions.game.load(id || match.params.id));
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
