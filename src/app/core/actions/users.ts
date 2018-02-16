// import @ngrx
import { Action } from '@ngrx/store';

// import models
import { User } from './../models/user';

export const AUTHENTICATE = '[Users] Authenticate';
export const AUTHENTICATE_ERROR = '[Users] Authentication error';
export const AUTHENTICATE_SUCCESS = '[Users] Authentication success';
export const AUTHENTICATED = '[Users] Authenticated';
export const AUTHENTICATED_ERROR = '[Users] Authenticated error';
export const AUTHENTICATED_SUCCESS = '[Users] Authenticated success';
export const SIGN_OUT = '[Users] Sign off';
export const SIGN_OUT_ERROR = '[Users] Sign off error';
export const SIGN_OUT_SUCCESS = '[Users] Sign off success';
export const SIGN_UP = '[Users] Sign up';
export const SIGN_UP_ERROR = '[Users] Sign up error';
export const SIGN_UP_SUCCESS = '[Users] Sign up success';

export class Authenticate implements Action {
    readonly type: string = AUTHENTICATE;

    constructor(public payload: { email: string, password: string }) { }
}

export class Authenticated implements Action {
    readonly type: string = AUTHENTICATED;

    constructor(public payload?: { token?: string }) { }
}

export class AuthenticatedSuccess implements Action {
    public type: string = AUTHENTICATED_SUCCESS;

    constructor(public payload: { authenticated: boolean, user: User }) { }
}

export class AuthenticatedError implements Action {
    public type: string = AUTHENTICATED_ERROR;

    constructor(public payload?: any) { }
}

export class AuthenticationError implements Action {
    public type: string = AUTHENTICATE_ERROR;

    constructor(public payload?: any) { }
}

export class AuthenticationSuccess implements Action {
    public type: string = AUTHENTICATE_SUCCESS;

    constructor(public payload: any) { }
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

export class SignUp implements Action {
    public type: string = SIGN_UP;
    constructor(public payload: { user: User }) { }
}

export class SignUpError implements Action {
    public type: string = SIGN_UP_ERROR;
    constructor(public payload?: any) { }
}

export class SignUpSuccess implements Action {
    public type: string = SIGN_UP_SUCCESS;
    constructor(public payload: { user: User }) { }
}

export type Actions
    =
    Authenticate
    | Authenticated
    | AuthenticatedError
    | AuthenticatedSuccess
    | AuthenticationError
    | AuthenticationSuccess
    | SignUp
    | SignUpError
    | SignUpSuccess;