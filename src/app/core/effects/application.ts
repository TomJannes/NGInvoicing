import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { defer } from 'rxjs/observable/defer';
import * as Act from './../actions/users';
import { UsersService } from '../services/users.service';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class AppEffects {
  @Effect()
  init$: Observable<Action> = defer(() => {
    return this.userService.tryLoadAuthenticationFromLocalStorage()
      .switchMap(data => {
        if (data) {
          return [
            new Act.AuthenticationSuccess(data)
          ]
        } else {
          return [
            new RouterActions.Go({ path: ['/sign-in'] })
          ]
        }
      });
  });

  constructor(private actions$: Actions,
    private userService: UsersService) {
  }
}