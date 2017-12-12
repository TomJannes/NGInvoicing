import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/customer';

import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/utils';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { CustomerService } from '../services/customer.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromCustomer from '../reducers';

@Injectable()
export class CustomerEffects {

    @Effect()
    customers$ = this.actions$.ofType(Act.SEARCH)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.customer.overview.parameters)
        .switchMap(params => {
            return this.customerService.searchCustomers(params)
                .switchMap(data => {
                    return [
                        new Act.SearchSuccess({ data: data })
                    ];
                })
                .catch((error) => {
                    return [
                        new Act.SearchFailed({ error: error })
                    ];
                });
        });

    @Effect()
    updateSearchParameters$ = this.actions$.ofType(Act.UPDATE_SEARCH_PARAMS)
        .switchMap(() => {
            return [
                new Act.Search()
            ];
        });

    @Effect()
    navigateToCustomers$ = this.actions$.ofType(ROUTER_NAVIGATION)
        .map(this.toRouterStateUrl)
        .filter(state => state.url.indexOf('customers/overview') !== -1)
        .switchMap((route) => {
            return [
                new Act.Search()
            ];
        });

    toRouterStateUrl(r: RouterNavigationAction<RouterStateUrl>): RouterStateUrl {
        return r.payload.routerState;
    }

    constructor(private actions$: Actions, private customerService: CustomerService, private store: Store<fromCustomer.State>) { }
}
