import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/customer-detail';
import * as CustomerTypeAct from '../actions/customer-type';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { CustomerService } from '../services/customer.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromCustomerDetail from '../reducers';
import { Get, Save } from '../actions/customer-detail';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/utils';

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
                            new Act.SaveSuccess({ data: data })
                        ];
                    })
                    .catch((error) => {
                        return [
                            new Act.SaveFailed({ error: error })
                        ];
                    });
            });

    constructor(private actions$: Actions, private customerService: CustomerService, private store: Store<fromCustomerDetail.State>) { }
}
