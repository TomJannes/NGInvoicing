import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/invoice-detail';
import * as GlobalActions from '../../shared/actions/global-actions';
// import * as InvoiceTypeAct from '../actions/invoice-type';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { InvoiceService } from '../services/invoice.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromInvoiceDetail from '../reducers';
import { Get, Save, SaveSuccess } from '../actions/invoice-detail';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/utils';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class InvoiceDetailEffects {

    @Effect()
    invoiceDetail$ = this.actions$.ofType<Get>(Act.GET)
        .switchMap(query => {
            return this.invoiceService.getInvoice(query.id)
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
    invoiceDetailSave$ = this.actions$.ofType<Save>(Act.SAVE)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.invoice.detail.invoice)
        .switchMap(invoice => {
            return this.invoiceService.saveInvoice(invoice)
                .switchMap(data => {
                    return [
                        new Act.SaveSuccess({ data: data }),
                        new GlobalActions.ShowSnackbar('The invoice was saved successfully')
                    ];
                })
                .catch((error) => {
                    return [
                        new Act.SaveFailed({ error: error }),
                        new GlobalActions.ShowSnackbar('An error occurred while saving the invoice')
                    ];
                });
        });

        @Effect()
        redirectAfterSuccessfullSave$ = this.actions$.ofType<SaveSuccess>(Act.SAVE_SUCCESS)
            .switchMap(() => {
                return [
                    new RouterActions.Go({ path: ['/invoices/overview'] })
                ];
            });

    constructor(private actions$: Actions, private invoiceService: InvoiceService, private store: Store<fromInvoiceDetail.State>) { }
}
