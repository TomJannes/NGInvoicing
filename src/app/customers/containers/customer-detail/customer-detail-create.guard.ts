import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PreloadHelper } from '../../../shared/preload-helper';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';
import * as fromCustomer from '../../reducers';
import * as CustomerTypeActions from '../../actions/customer-type';
import * as CustomerDetailActions from '../../actions/customer-detail';
import { of } from 'rxjs/observable/of';
import { Customer } from '../../model/customer';

@Injectable()
export class CustomerDetailCreateGuard implements CanActivate {
    constructor(private store: Store<fromCustomer.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return Observable.zip(
            this.tryLoadCustomerTypes(),
            this.resetCustomer()
        ).filter((data) => {
            return data[0] !== null && data[1] !== null;
        })
        .switchMap(() => of(true))
        .catch(() => of(false));
    }

    private tryLoadCustomerTypes(): Observable<CustomerTypeSearchResult> {
        return PreloadHelper.preloadData<CustomerTypeSearchResult>(
            this.store,
            fromCustomer.getCustomerTypes,
            new CustomerTypeActions.Search(),
            (data: CustomerTypeSearchResult) => data.customerTypes.length > 0);
    }

    private resetCustomer(): Observable<Customer> {
        return PreloadHelper.preloadDataAllways<Customer>(
            this.store,
            fromCustomer.getSelectedCustomer,
            new CustomerDetailActions.Reset(),
            (data: Customer) => data.id === 0);
    }
}
