import { LOGIN } from '../actions/login.action';
import { AppAction } from '../main.interface';

const initialState = {
  isLogged: false
};

export function loginReducer(state = initialState, action: AppAction) {
  console.log('action: ', action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload
      };

    default:
      return { ...state };
  }
}
