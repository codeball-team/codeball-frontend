import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajaxRequests from './ajaxRequests';
import currentUserData from './currentUserData';
import gameData from './gameData';
import gamesData from './gamesData';
import enrollUser from './enrollUser';
import newGame from './newGame';
import newPitch from './newPitch';
import newUser from './newUser';
import pitchData from './pitchData';
import pitchesData from './pitchesData';
import userData from './userData';
import usersData from './usersData';

const rootReducer = combineReducers({
  ajaxRequests,
  currentUserData,
  gameData,
  gamesData,
  enrollUser,
  newGame,
  newPitch,
  newUser,
  pitchData,
  pitchesData,
  userData,
  usersData,
  routing: routerReducer
});

export default rootReducer;
