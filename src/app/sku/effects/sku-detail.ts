import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as Act from '../actions/sku-detail';
import * as GlobalActions from '../../shared/actions/global-actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/withLatestFrom';
import { SkuService } from '../services/sku.service';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromSkuDetail from '../reducers';
import { Get, Save, SaveSuccess } from '../actions/sku-detail';
import { RouterStateUrl } from '../../shared/utils';
import * as RouterActions from '../../shared/router/router.actions';

@Injectable()
export class SkuDetailEffects {

    @Effect()
    skuDetail$ = this.actions$.ofType<Get>(Act.GET)
        .switchMap(query => {
            return this.skuService.getSku(query.id)
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
    skuDetailSave$ = this.actions$.ofType<Save>(Act.SAVE)
        .withLatestFrom(this.store)
        .map(([action, state]) => state.sku.detail.sku)
        .switchMap(sku => {
            return this.skuService.saveSku(sku)
                .switchMap(data => {
                    return [
                        new Act.SaveSuccess({ data: data }),
                        new GlobalActions.ShowSnackbar('The sku was saved successfully')
                    ];
                })
                .catch((error) => {
                    return [
                        new Act.SaveFailed({ error: error }),
                        new GlobalActions.ShowSnackbar('An error occurred while saving the sku')
                    ];
                });
        });

        @Effect()
        redirectAfterSuccessfullSave$ = this.actions$.ofType<SaveSuccess>(Act.SAVE_SUCCESS)
            .switchMap(() => {
                return [
                    new RouterActions.Go({ path: ['/skus/overview'] })
                ];
            });

    constructor(private actions$: Actions, private skuService: SkuService, private store: Store<fromSkuDetail.State>) { }
}
