import { Injectable } from '@angular/core';
import * as fromCustomer from '../../reducers';
import * as CustomerActions from '../../actions/customer';
import { of } from 'rxjs/observable/of';
import * as LayoutActions from '../../actions/layout';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class CustomerOverviewGuard implements CanActivate {
    constructor(private store: Store<fromCustomer.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new LayoutActions.CloseFilter());
        this.store.dispatch(new CustomerActions.Reset());
        return this.store.select(fromCustomer.getCustomers)
            .filter((data) => {
                return data.customers !== null;
            })
            .take(1)
            .switchMap(() => of(true))
            .catch(() => of(false));
    }
}
