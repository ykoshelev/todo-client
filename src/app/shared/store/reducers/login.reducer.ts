import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './../actions/login.action';
import { AppAction } from './../../interfaces/index.interface';

const initialState = {
  isLogged: false
};

export function loginReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: action.payload
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: action.payload
      };

    default:
      return { ...state };
  }
}
