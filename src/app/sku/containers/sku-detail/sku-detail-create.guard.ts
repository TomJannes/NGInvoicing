import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromSku from '../../reducers';
import * as SkuDetailActions from '../../actions/sku-detail';
import { of } from 'rxjs/observable/of';
import { Sku } from '../../model/sku';
import 'rxjs/add/observable/zip';

@Injectable()
export class SkuDetailCreateGuard implements CanActivate {
    constructor(private store: Store<fromSku.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new SkuDetailActions.Reset());
        return Observable.zip(
                    this.store.select(fromSku.getSelectedSku).filter((data) => data.id === 0).take(1),
                    // todo: add vat
                ).filter((data) => {
                    return data[0] !== null && data[1] !== null;
                })
                .switchMap(() => of(true))
                .catch(() => of(false));
    }
}
