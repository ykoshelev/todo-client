import { createSelector } from '@ngrx/store';
import { MainState, AppState } from './../../interfaces/index.interface';

export const selectFeature = (state: MainState) => state.app;

export const appTitle = createSelector(selectFeature, (state: AppState) => state.title);
