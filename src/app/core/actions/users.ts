// import @ngrx
import { Action } from '@ngrx/store';

// import models
import { User } from './../models/user';

export const AUTHENTICATE = '[Users] Authenticate';
export const AUTHENTICATE_ERROR = '[Users] Authentication error';
export const AUTHENTICATE_SUCCESS = '[Users] Authentication success';

// export const AUTHENTICATED = '[Users] Authenticated';
// export const AUTHENTICATED_ERROR = '[Users] Authenticated error';
// export const AUTHENTICATED_SUCCESS = '[Users] Authenticated success';
export const SIGN_OUT = '[Users] Sign off';
export const SIGN_OUT_ERROR = '[Users] Sign off error';
export const SIGN_OUT_SUCCESS = '[Users] Sign off success';
// export const SIGN_UP = '[Users] Sign up';
// export const SIGN_UP_ERROR = '[Users] Sign up error';
// export const SIGN_UP_SUCCESS = '[Users] Sign up success';

export const LOAD_CURRENT_USER = '[Users] Load current user';
export const LOAD_CURRENT_USER_ERROR = '[Users] Load current user error';
export const LOAD_CURRENT_USER_SUCCESS = '[Users] Load current user success';

export class Authenticate implements Action {
    readonly type: string = AUTHENTICATE;

    constructor(public payload: { email: string, password: string }) { }
}

export class AuthenticationError implements Action {
    public type: string = AUTHENTICATE_ERROR;

    constructor(public payload?: any) { }
}

export class AuthenticationSuccess implements Action {
    public type: string = AUTHENTICATE_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadCurrentUser implements Action {
    public type: string = LOAD_CURRENT_USER;

    constructor(public payload?: any) { }
}

export class LoadCurrentUserSuccess implements Action {
    public type: string = LOAD_CURRENT_USER_SUCCESS;
    constructor(public payload?: any) { }
}

export class LoadCurrentUserError implements Action {
    public type: string = LOAD_CURRENT_USER_ERROR;
    constructor(public payload?: any) { }
}

export class SignOut implements Action {
    public type: string = SIGN_OUT;
    constructor(public payload?: any) { }
}

export class SignOutError implements Action {
    public type: string = SIGN_OUT_SUCCESS;
    constructor(public payload?: any) { }
}

export class SignOutSuccess implements Action {
    public type: string = SIGN_OUT_SUCCESS;
    constructor(public payload?: any) { }
}

export type Actions = 
    Authenticate
    | AuthenticationError
    | AuthenticationSuccess
    | LoadCurrentUser
    | LoadCurrentUserSuccess
    | LoadCurrentUserError
    | SignOut
    | SignOutError
    | SignOutSuccess;