import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/invoice';

import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from '../../shared/utils';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { InvoiceService } from '../services/invoice.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import * as fromInvoice from '../reducers';
import { switchMap } from 'rxjs/operator/switchMap';
import { Download } from '../actions/invoice';
import * as FileSaver from 'file-saver';

@Injectable()
export class InvoiceEffects {

    @Effect({dispatch: false})
    download$ = this.actions$.ofType<Download>(Act.DOWNLOAD)
        .switchMap(query => {
            return this.invoiceService.download(query.id)
                .switchMap(res => {
                    let filename = res.headers.get('content-disposition').replace('attachment; filename=', '').replace(/"/g, '');
                    FileSaver.saveAs(res.body, filename);
                    return Observable.of({});
                })
        });

    @Effect()
    invoices$ = this.actions$.ofType(Act.SEARCH)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.invoice.overview.parameters)
        .switchMap(params => {
            return this.invoiceService.searchInvoices(params)
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
    updateSearchParameters$ = this.actions$.ofType(Act.UPDATE_SEARCH_PARAMS, Act.RESET_SEARCH_PARAMS)
        .switchMap(() => {
            return [
                new Act.Search()
            ];
        });

    constructor(private actions$: Actions, private invoiceService: InvoiceService, private store: Store<fromInvoice.State>) { }
}
