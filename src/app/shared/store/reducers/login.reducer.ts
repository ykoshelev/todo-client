import { LOGIN } from '../actions/login.action';
import { AppAction } from '../main.interface';

const initialState = {
  isLogged: false
};

export function loginReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true
      };

    default:
      return { ...state };
  }
}
