import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/sku';
import * as GlobalActions from '../../shared/actions/global-actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { SkuService } from '../services/sku.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromSku from '../reducers';

@Injectable()
export class SkuEffects {

    @Effect()
    skus$ = this.actions$.ofType(Act.SEARCH)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.sku.overview.parameters)
        .switchMap(params => {
            return this.skuService.searchSkus(params)
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

    @Effect()
    deleteCustomers$ = this.actions$.ofType(Act.DELETE)
        .switchMap((params: Act.Delete) => {
            return this.skuService.deleteSku(params.payload)
                .switchMap(data => {
                    return [
                        new Act.Search(),
                        new GlobalActions.ShowSnackbar('The stock keeping unit was deleted successfully')
                    ];
                }).catch((error) => {
                    return [
                        new GlobalActions.ShowSnackbar('An error occurred while deleting the stock keeping unit')
                    ];
                });
        });

    constructor(private actions$: Actions, private skuService: SkuService, private store: Store<fromSku.State>) { }
}
