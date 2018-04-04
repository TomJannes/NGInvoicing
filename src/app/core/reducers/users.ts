import * as user from './../actions/users';
import { User } from './../models/user';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

export interface UsersState {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: User;
  token?: string;
}

const initialState: UsersState = {
  authenticated: null,
  loaded: false,
  loading: false
};

export function getInitialState() {
  
}

export function reducer(state: UsersState = initialState, action: user.Actions): UsersState {

  switch (action.type) {
    case user.AUTHENTICATE:
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });

    case user.AUTHENTICATE_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.payload.error.message,
        loading: false
      });

    case user.AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        token: action.payload.token
      });

    case user.SIGN_OUT_ERROR:
      return Object.assign({}, state, {
        authenticated: true,
        error: action.payload.error.message,
        user: undefined,
        token: undefined
      });

    case user.SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        error: undefined,
        user: undefined,
        token: undefined
      });

    default:
      return state;
  }
}


export const isAuthenticated = (state: UsersState) => state.authenticated;
export const getAuthenticatedUser = (state: UsersState) => state.user;
export const getAuthenticationError = (state: UsersState) => state.error;
export const isLoading = (state: UsersState) => state.loading;
export const getSignOutError = (state: UsersState) => state.error;
export const getToken = (state: UsersState) => state.token;