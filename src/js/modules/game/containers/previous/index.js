import { actions as currentUserActions } from 'current-user/state';
import { actions } from 'game/state';
import { actions as pitchesActions } from 'pitches/state';
import { actions as usersActions } from 'users/state';
import { gameContainerSelector } from 'selectors/containers';
import { ContainerComponent } from 'components/base';
import Game from './component';

export default ContainerComponent(Game, {
  mapStateToProps: gameContainerSelector,
  periodicDataUpdates: true,
  updateData: ({ dispatch, id, match }) => {
    dispatch(actions.game.load(id || match.params.id));
    dispatch(currentUserActions.currentUser.load());
    dispatch(pitchesActions.pitches.load());
    dispatch(usersActions.users.load());
  }
});
