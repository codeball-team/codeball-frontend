import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-user/state';
import { selectIsValid } from 'new-user/selectors';
import { ContainerComponent } from 'components/base';
import NewUser from './component';

export default ContainerComponent(NewUser, {
  mapStateToProps: (state) => ({
    isValid: selectIsValid(state)
  }),
  mapDispatchToProps: {
    onMount: actions.newUser.reset,
    onSubmit: actions.newUser.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
