import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajax from 'ajax/state';
import currentUserData from 'current-user/state';
import enrollAnotherUser from 'enroll-another-user/state';
import gameData from 'game/state';
import gamesData from 'games/state';
import newGame from 'new-game/state';
import newPitch from 'new-pitch/state';
import newUser from 'new-user/state';
import pitchData from 'pitch/state';
import pitchesData from 'pitches/state';
import userData from 'user/state';
import usersData from 'users/state';

const rootReducer = combineReducers({
  ajax,
  currentUserData,
  enrollAnotherUser,
  gameData,
  gamesData,
  newGame,
  newPitch,
  newUser,
  pitchData,
  pitchesData,
  userData,
  usersData,
  router: routerReducer
});

export default rootReducer;
