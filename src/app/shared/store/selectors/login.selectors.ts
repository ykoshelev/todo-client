import { createSelector } from '@ngrx/store';
import { LoginState, MainState } from '../../interfaces/index.interface';

export const selectFeature = (state: MainState) => {
  return state.login;
};

export const isLogged = createSelector(selectFeature, (state: LoginState) => state.isLogged);
