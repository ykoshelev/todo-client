import { AppAction } from './../../interfaces/index.interface';

export const LOGIN = '[LOGIN] Login';
export const LOGIN_SUCCESS = '[LOGIN] Login success';
export const LOGIN_FAILED = '[LOGIN] Login failed';

export class LoginAction implements AppAction {
  public type = LOGIN;
  constructor(public payload: any) {}
}

export class LoginActionSuccess implements AppAction {
  public type = LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoginActionFailed implements AppAction {
  public type = LOGIN_FAILED;
  constructor(public payload?: any) {}
}
