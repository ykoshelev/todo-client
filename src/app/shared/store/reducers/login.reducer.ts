import { LOGIN_SUCCESS } from './../actions/login.action';
import { AppAction } from './../../interfaces/index.interface';

const initialState = {
  isLogged: false
};

export function loginReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true
      };

    default:
      return { ...state };
  }
}
