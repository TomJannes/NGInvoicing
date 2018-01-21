import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/invoice-state';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import * as fromInvoiceState from '../reducers';
import { InvoiceStateService } from '../services/invoice-state.service';

@Injectable()
export class InvoiceStateEffects {

    @Effect()
    invoiceStates$ = this.actions$.ofType(Act.SEARCH)
        .switchMap(params => {
            return this.invoiceStateService.searchInvoiceStates(null)
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

    constructor(private actions$: Actions, private invoiceStateService: InvoiceStateService) { }
}
