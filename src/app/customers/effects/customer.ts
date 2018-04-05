import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/customer';
import * as GlobalActions from '../../shared/actions/global-actions';

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
    deleteCustomers$ = this.actions$.ofType(Act.DELETE)
        .switchMap((params: Act.Delete) => {
            return this.customerService.deleteCustomer(params.payload)
                .switchMap(data => {
                    return [
                        new Act.Search(),
                        new GlobalActions.ShowSnackbar('The customer was deleted successfully')
                    ];
                }).catch((error) => {
                    return [
                        new GlobalActions.ShowSnackbar('An error occurred while deleting the customer')
                    ];
                });
        });

    @Effect()
    updateSearchParameters$ = this.actions$.ofType(Act.UPDATE_SEARCH_PARAMS, Act.RESET_SEARCH_PARAMS)
        .switchMap(() => {
            return [
                new Act.Search()
            ];
        });

    constructor(private actions$: Actions, private customerService: CustomerService, private store: Store<fromCustomer.State>) { }
}
