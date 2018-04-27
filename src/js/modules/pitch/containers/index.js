import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitch/state';
import { selectDataIsLoading, selectHasLoaded } from 'pitch/selectors';
import { ContainerComponent } from 'components/base';
import Pitch from './component';

export default ContainerComponent(Pitch, {
  mapStateToProps: (state) => ({
    hasLoaded: selectHasLoaded(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitch.load(match.params.id));
  }
});
