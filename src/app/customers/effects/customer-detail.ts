import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/customer-detail';
import * as GlobalActions from '../../shared/actions/global-actions';
import * as CustomerTypeAct from '../actions/customer-type';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { CustomerService } from '../services/customer.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromCustomerDetail from '../reducers';
import { Get, Save, SaveSuccess } from '../actions/customer-detail';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/utils';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class CustomerDetailEffects {

    @Effect()
    customerDetail$ = this.actions$.ofType<Get>(Act.GET)
        .switchMap(query => {
            return this.customerService.getCustomer(query.id)
                .switchMap(data => {
                    return [
                        new Act.GetSuccess({ data: data })
                    ];
                })
                .catch((error) => {
                    return [
                        new Act.GetFailed({ error: error })
                    ];
                });
        });

    @Effect()
    customerDetailSave$ = this.actions$.ofType<Save>(Act.SAVE)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.customer.detail.customer)
        .switchMap(customer => {
            return this.customerService.saveCustomer(customer)
                .switchMap(data => {
                    return [
                        new Act.SaveSuccess({ data: data }),
                        new GlobalActions.ShowSnackbar('The customer was saved successfully')
                    ];
                })
                .catch((error) => {
                    return [
                        new Act.SaveFailed({ error: error }),
                        new GlobalActions.ShowSnackbar('An error occurred while saving the customer')
                    ];
                });
        });

        @Effect()
        redirectAfterSuccessfullSave$ = this.actions$.ofType<SaveSuccess>(Act.SAVE_SUCCESS)
            .switchMap(() => {
                return [
                    new RouterActions.Go({ path: ['/customers/overview'] })
                ];
            });

    constructor(private actions$: Actions, private customerService: CustomerService, private store: Store<fromCustomerDetail.State>) { }
}
