import { AppAction } from './../../interfaces/index.interface';
import { TITLE } from '../actions/app.action';

const initialState = {
  title: ''
};

export function appReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        title: action.payload
      };

    default:
      return state;
  }
}
