import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store, MemoizedSelector, Action } from '@ngrx/store';
import * as fromCustomer from '../../reducers';
import * as CustomerTypeActions from '../../actions/customer-type';
import * as CustomerDetailActions from '../../actions/customer-detail';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/combineLatest';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';
import { Customer } from '../../model/customer';
import { PreloadHelper } from '../../../shared/preload-helper';

@Injectable()
export class CustomerDetailCreateGuard implements CanActivate {
    constructor(private store: Store<fromCustomer.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.TryLoadCustomerTypes()
            .filter((data) => {
                return data[0] !== null && data[1] !== null;
            })
            .switchMap(() => of(true))
            .catch(() => of(false));
    }

    private TryLoadCustomerTypes(): Observable<CustomerTypeSearchResult> {
        return PreloadHelper.preloadData<CustomerTypeSearchResult>(
            this.store,
            fromCustomer.getCustomerTypes,
            new CustomerTypeActions.Search(),
            (data: CustomerTypeSearchResult) => data.customerTypes.length > 0);
    }
}
