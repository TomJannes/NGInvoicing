import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCustomer from '../../reducers';
import * as CustomerTypeActions from '../../actions/customer-type';
import * as CustomerDetailActions from '../../actions/customer-detail';
import { of } from 'rxjs/observable/of';
import { Customer } from '../../model/customer';
import 'rxjs/add/observable/zip';

@Injectable()
export class CustomerDetailCreateGuard implements CanActivate {
    constructor(private store: Store<fromCustomer.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new CustomerTypeActions.Search());
        this.store.dispatch(new CustomerDetailActions.Reset());
        return Observable.zip(
                    this.store.select(fromCustomer.getSelectedCustomer).filter((data) => data._id === null).take(1),
                    this.store.select(fromCustomer.getCustomerTypes).filter((data) => data.customerTypes !== null).take(1)
                ).filter((data) => {
                    return data[0] !== null && data[1] !== null;
                })
                .switchMap(() => of(true))
                .catch(() => of(false));
    }
}
