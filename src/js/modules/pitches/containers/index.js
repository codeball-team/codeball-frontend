import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitches/state';
import { selectCanAddPitch } from 'current-user/selectors';
import { selectDataIsLoading } from 'pitches/selectors';
import { ContainerComponent } from 'components/base';
import Pitches from './component';

export default ContainerComponent(Pitches, {
  mapStateToProps: (state) => ({
    canAddNew: selectCanAddPitch(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitches.load());
  }
});
