import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'games/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { selectCanAddGame } from 'current-user/selectors';
import { selectDataIsLoading } from 'games/selectors';
import { ContainerComponent } from 'components/base';
import Games from './component';

export default ContainerComponent(Games, {
  mapStateToProps: (state) => ({
    canAddNew: selectCanAddGame(state),
    isLoading: selectDataIsLoading(state)
  }),
  periodicDataUpdates: true,
  updateData: ({ dispatch }) => {
    dispatch(actions.games.load());
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
