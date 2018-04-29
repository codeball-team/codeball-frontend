import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-pitch/state';
import { selectDataIsLoading, selectIsValid } from 'new-pitch/selectors';
import { ContainerComponent } from 'components';
import NewPitch from './component';

export default ContainerComponent(NewPitch, {
  mapStateToProps: (state) => ({
    isLoading: selectDataIsLoading(state),
    isValid: selectIsValid(state)
  }),
  mapDispatchToProps: {
    onMount: actions.newPitch.reset,
    onSubmit: actions.newPitch.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
