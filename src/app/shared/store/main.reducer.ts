import { combineReducers } from '@ngrx/store';
import { loginReducer } from './reducers/login.reducer';

export const reducers = {
  login: loginReducer
};
