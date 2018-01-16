import { Injectable } from '@angular/core';
import * as fromSku from '../../reducers';
import * as SkuActions from '../../actions/sku';
import { of } from 'rxjs/observable/of';
import * as LayoutActions from '../../actions/layout';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class SkuOverviewGuard implements CanActivate {
    constructor(private store: Store<fromSku.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new LayoutActions.CloseFilter());
        this.store.dispatch(new SkuActions.Reset());
        return this.store.select(fromSku.getSkus)
            .filter((data) => {
                return data.skus !== null;
            })
            .take(1)
            .switchMap(() => of(true))
            .catch(() => of(false));
    }
}
