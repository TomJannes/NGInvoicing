import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { UsersService } from './../services/users.service';
import * as Act from './../actions/users';
import { ofType } from '@ngrx/effects/src/actions';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class UsersEffects {

  @Effect()
  authenticate$: Observable<Action> = this.actions$
    .ofType<Act.Authenticate>(Act.AUTHENTICATE)
    .debounceTime(500)
    .map(action => action.payload)
    .switchMap(payload => {
      return this.userService.authenticate(payload.email, payload.password)
        .switchMap(data => [
          new Act.AuthenticationSuccess(data)//,
          //new Act.LoadCurrentUser()
        ])
        .catch(error => Observable.of(new Act.AuthenticationError({ error: error })));
    });


  @Effect()
  signOut$: Observable<Action> = this.actions$
    .ofType<Act.SignOut>(Act.SIGN_OUT)
    .map(action => action.payload)
    .switchMap(payload => {
      return this.userService.signout()
        .map(value => new Act.SignOutSuccess())
        .catch(error => Observable.of(new Act.SignOutError({ error: error })));
    });

    @Effect()
    redirectAfterSuccessfullSignIn$ = this.actions$.ofType<Act.AuthenticationSuccess>(Act.AUTHENTICATE_SUCCESS)
        .switchMap(() => {
            return [
                new RouterActions.Go({ path: ['/dashboard'] })
            ];
        });

  constructor(private actions$: Actions,
    private userService: UsersService) {
  }
}