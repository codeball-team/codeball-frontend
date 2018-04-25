import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'pitch/state';
import { pitchContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Pitch from './component';

export default ContainerComponent(Pitch, {
  mapStateToProps: pitchContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch, match }) => {
    dispatch(currentUserActions.currentUser.load());
    dispatch(actions.pitch.load(match.params.id));
  }
});
