import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitches/state';
import { pitchesContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Pitches from './component';

export default ContainerComponent(Pitches, {
  mapStateToProps: pitchesContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitches.load());
  }
});
