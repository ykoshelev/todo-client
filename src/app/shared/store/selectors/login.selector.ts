import { LoginState, MainState } from '../main.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: MainState) => {
  return state.login;
};

export const isLogged = createSelector(selectFeature, (state: LoginState) => state.isLogged);
