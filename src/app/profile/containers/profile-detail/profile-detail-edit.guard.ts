import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromProfile from '../../reducers';
import * as ProfileActions from '../../actions/profile';
import { of } from 'rxjs/observable/of';
import { Profile } from '../../model/profile';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Injectable()
export class ProfileDetailEditGuard implements CanActivate {
    constructor(private store: Store<fromProfile.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new ProfileActions.Reset());
        this.store.dispatch(new ProfileActions.Get());
        return this.store.select(fromProfile.getProfile)
            .filter((data) => data !== null)
            .take(1)
            .switchMap(() => of(true))
            .catch(() => of(false));
    }
}
