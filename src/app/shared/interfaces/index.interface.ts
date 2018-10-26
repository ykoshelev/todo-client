import { Action } from '@ngrx/store';

export interface MainState {
  login: LoginState;
}

export interface LoginState {
  isLogged: boolean;
}

export interface AppAction extends Action {
  payload?: any;
}
