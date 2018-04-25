import { PERMISSION_ADD_USER, ROLE_OPTIONS } from 'constants';
import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'new-user/state';
import { newUserContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import NewUser from './component';

export default ContainerComponent(NewUser, {
  mapStateToProps: newUserContainerSelector,
  mapDispatchToProps: {
    onEmailChange: actions.newUser.changeEmail,
    onFirstNameChange: actions.newUser.changeFirstName,
    onLastNameChange: actions.newUser.changeLastName,
    onMount: actions.newUser.reset,
    onRoleChange: actions.newUser.changeRole,
    onSubmit: actions.newUser.submit
  },
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(currentUserActions.currentUser.load());
  }
});
