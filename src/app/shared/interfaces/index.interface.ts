import { Action } from '@ngrx/store';

export interface MainState {
  login: LoginState;
  app: AppState;
}

export interface LoginState {
  isLogged: boolean;
}

export interface AppState {
  title: string;
}

export interface AppAction extends Action {
  payload?: any;
}
