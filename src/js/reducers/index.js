import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajaxRequests from 'ajax/state';
import currentUserData from 'current-user/state';
import enrollAnotherUser from './enroll-another-user';
import gameData from 'game/state';
import gamesData from './games-data';
import newGame from './new-game';
import newPitch from './new-pitch';
import newUser from './new-user';
import pitchData from './pitch-data';
import pitchesData from './pitches-data';
import userData from './user-data';
import usersData from './users-data';

const rootReducer = combineReducers({
  ajaxRequests,
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
