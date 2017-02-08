import {combineReducers} from 'redux';

import app from './appReducer';
import user from './userReducer';

/*
state
- app
- user
*/
export default combineReducers({
  app,
  user,
});
