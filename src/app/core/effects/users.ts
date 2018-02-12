import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { UsersService } from './../services/users.service';
import * as Act from './../actions/users';

@Injectable()
export class UsersEffects {

  @Effect()
  authenticate$: Observable<Action> = this.actions
    .ofType<Act.Authenticate>(Act.AUTHENTICATE)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.authenticate(payload.email, payload.password)
        .map(user => new Act.AuthenticationSuccess({user: user}))
        .catch(error => Observable.of(new Act.AuthenticationError({error: error})));
    });

  @Effect()
  authenticated$: Observable<Action> = this.actions
    .ofType<Act.Authenticated>(Act.AUTHENTICATED)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.authenticatedUser()
        .map(user => new Act.AuthenticatedSuccess({authenticated: (user !== null), user: user}))
        .catch(error => Observable.of(new Act.AuthenticatedError({error: error})));
    });

  @Effect()
  createUser$: Observable<Action> = this.actions
    .ofType<Act.SignUp>(Act.SIGN_UP)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.create(payload.user)
        .map(user => new Act.SignUpSuccess({user: user}))
        .catch(error => Observable.of(new Act.SignUpError({error: error})));
    });

  @Effect()
  signOut$: Observable<Action> = this.actions
    .ofType<Act.SignOut>(Act.SIGN_OUT)
    .map(toPayload)
    .switchMap(payload => {
      return this.userService.signout()
        .map(value => new Act.SignOutSuccess())
        .catch(error => Observable.of(new Act.SignOutError({error: error})));
    });

  constructor(private actions: Actions,
              private userService: UsersService) {
  }
}