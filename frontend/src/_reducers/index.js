import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import authReducer from './auth.reducer'
import timetableReducer from './timetable.reducer'

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  auth : authReducer,
  days: timetableReducer
});

export default rootReducer;