import { Action } from '@ngrx/store';

export const LOGIN = '[LOGIN] Login';
export const LOGIN_SUCCESS = '[LOGIN] Login success';
export const LOGIN_FAILED = '[LOGIN] Login failed';

export class LoginAction implements Action {
  public type = LOGIN;
  constructor(public payload?: any) {}
}

export class LoginActionSuccess implements Action {
  public type = LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoginActionFailed implements Action {
  public type = LOGIN_FAILED;
  constructor(public payload?: any) {}
}
