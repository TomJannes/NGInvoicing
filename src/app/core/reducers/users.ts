import * as user from './../actions/users';
import { User } from './../models/user';

export interface UsersState {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: User;
}

const initialState: UsersState = {
  authenticated: null,
  loaded: false,
  loading: false
};

export function reducer(state: UsersState = initialState, action: user.Actions): UsersState {

  switch (action.type) {
    case user.AUTHENTICATE:
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });

    case user.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loaded: true
      });

    case user.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case user.AUTHENTICATE_ERROR:
    case user.SIGN_UP_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case user.AUTHENTICATE_SUCCESS:
    case user.SIGN_UP_SUCCESS:
      const data: User = action.payload.user;
      if (data === null) {
        return state;
      }

      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        user: data
      });

    case user.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined
      });

    case user.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined
      });

    case user.SIGN_UP:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        loading: true
      });

    default:
      return state;
  }
}


export const isAuthenticated = (state: UsersState) => state.authenticated;
export const isAuthenticatedLoaded = (state: UsersState) => state.loaded;
export const getAuthenticatedUser = (state: UsersState) => state.user;
export const getAuthenticationError = (state: UsersState) => state.error;
export const isLoading = (state: UsersState) => state.loading;
export const getSignOutError = (state: UsersState) => state.error;
export const getSignUpError = (state: UsersState) => state.error;