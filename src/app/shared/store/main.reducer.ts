import { combineReducers } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducer';

export const mainReducer = combineReducers({
  login: loginReducer
});
