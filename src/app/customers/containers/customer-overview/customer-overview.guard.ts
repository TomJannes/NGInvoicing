import { Injectable } from '@angular/core';
import * as fromCustomer from '../../reducers';
import * as CustomerActions from '../../actions/customer';
import { of } from 'rxjs/observable/of';
import * as LayoutActions from '../../actions/layout';
import 'rxjs/add/observable/zip';
import { CustomerSearchParams } from '../../model/params/customer-search-params';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PreloadHelper } from '../../../shared/preload-helper';
import { CustomerSearchResult } from '../../model/results/customer-search-result';


@Injectable()
export class CustomerOverviewGuard implements CanActivate {
    constructor(private store: Store<fromCustomer.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return Observable.zip(
            this.tryCloseFilter(),
            this.resetCustomerParameters(),
            this.waitForParameterReset()
        ).filter((data) => {
            return !data[0] && data[1] !== null && data[2];
        })
        .switchMap(() => of(true))
        .catch(() => {
            return of(false)
        });
    }

    private tryCloseFilter(): Observable<boolean> {
        return PreloadHelper.preloadData<boolean>(
            this.store,
            fromCustomer.getFilterLayout,
            new LayoutActions.CloseFilter(),
            (data: boolean) => !data);
    }

    private resetCustomerParameters(): Observable<CustomerSearchResult> {
        return PreloadHelper.preloadDataAllways<CustomerSearchResult>(
            this.store,
            fromCustomer.getCustomers,
            new CustomerActions.Reset(),
            (data: CustomerSearchResult) => data.customers.length > 0);
    }

    private waitForParameterReset(): Observable<boolean> {
        return PreloadHelper.preloadData<boolean>(
            this.store,
            fromCustomer.getIsCustomerLoadSuccess,
            null,
            (data: boolean) => data);
    }
}