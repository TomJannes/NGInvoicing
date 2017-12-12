import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/customer-type';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import * as fromCustomerType from '../reducers';
import { CustomerTypeService } from '../services/customer-type.service';

@Injectable()
export class CustomerTypeEffects {

    @Effect()
    customerTypes$ = this.actions$.ofType(Act.SEARCH)
        .switchMap(params => {
            return this.customerTypeService.searchCustomerTypes(null)
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

    constructor(private actions$: Actions, private customerTypeService: CustomerTypeService) { }
}
