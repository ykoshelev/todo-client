import { LoginState, MainState } from '../main.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: MainState) => {
  console.log('state: ', state);
  return state;
};

export const isLogged = createSelector(selectFeature, (state: MainState) => state);
