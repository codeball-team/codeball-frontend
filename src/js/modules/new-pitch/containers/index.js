import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-pitch/state';
import { newPitchContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import NewPitch from './component';

export default ContainerComponent(NewPitch, {
  mapStateToProps: newPitchContainerSelector,
  mapDispatchToProps: {
    onAddressChange: actions.newPitch.changeAddress,
    onMinCapacityChange: actions.newPitch.changeMinCapacity,
    onMaxCapacityChange: actions.newPitch.changeMaxCapacity,
    onMount: actions.newPitch.reset,
    onNameChange: actions.newPitch.changeName,
    onTypeChange: actions.newPitch.changeType,
    onSubmit: actions.newPitch.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
