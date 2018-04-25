import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'games/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { gamesContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Games from './component';

export default ContainerComponent(Games, {
  mapStateToProps: gamesContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(actions.games.load());
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
