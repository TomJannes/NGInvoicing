import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromSku from '../../reducers';
import * as SkuDetailActions from '../../actions/sku-detail';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/zip';

@Injectable()
export class SkuDetailEditGuard implements CanActivate {
    constructor(private store: Store<fromSku.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new SkuDetailActions.Get(route.params.id));
        return Observable.zip(
                    this.store.select(fromSku.getSelectedSku).filter((data) => data.id === Number(route.params.id)).take(1)
                    // todo: add vat
                ).filter((data) => {
                    return data[0] !== null && data[1] !== null;
                })
                .switchMap(() => of(true))
                .catch(() => of(false));
    }
}
