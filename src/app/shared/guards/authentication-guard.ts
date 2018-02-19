import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as RouterActions from './../../shared/router/router.actions';
import * as fromUsers from '../../reducers';


@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private store: Store<fromUsers.State>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const observable = this.store.select(fromUsers.getUserIsAuthenticated);
        observable.subscribe(authenticated => {
            if (!authenticated) {
                this.store.dispatch(new RouterActions.Go({ path: ['/sign-in'] }));
            }
        });
        return observable;
    }
}