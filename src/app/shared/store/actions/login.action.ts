import { AppAction } from './../../interfaces/index.interface';

export const LOGIN = '[LOGIN] Login';
export const LOGIN_SUCCESS = '[LOGIN] Login success';
export const LOGIN_FAILED = '[LOGIN] Login failed';

export const LOGOUT = '[LOGOUT] Logout';
export const LOGOUT_SUCCESS = '[LOGOUT] Logout success';
export const LOGOUT_FAILED = '[LOGOUT] Logout failed';

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

export class LogoutAction implements AppAction {
  public type = LOGOUT;
  constructor() {}
}

export class LogoutActionSuccess implements AppAction {
  public type = LOGOUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class LogoutActionFailed implements AppAction {
  public type = LOGOUT_FAILED;
  constructor(public payload?: any) {}
}
