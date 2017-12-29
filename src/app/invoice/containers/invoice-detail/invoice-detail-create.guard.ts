import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromInvoice from '../../reducers';
import * as fromCustomers from '../../../customers/reducers';
import * as fromSku from '../../../sku/reducers';
import * as CustomerActions from '../../../customers/actions/customer';
import * as SkuActions from '../../../sku/actions/sku';
import { of } from 'rxjs/observable/of';
import { Invoice } from '../../model/invoice';
import 'rxjs/add/observable/zip';

@Injectable()
export class InvoiceDetailCreateGuard implements CanActivate {
    constructor(private store: Store<fromInvoice.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new CustomerActions.UpdateSearchParameters(null));
        this.store.dispatch(new SkuActions.UpdateSearchParameters(null));
        return Observable.zip(
                    this.store.select(fromInvoice.getSelectedInvoice).filter((data) => data.id === 0).take(1),
                    this.store.select(fromCustomers.getCustomers).filter((data) => data.customers.length > 0).take(1),
                    this.store.select(fromSku.getSkus).filter((data) => data.skus.length > 0).take(1),
                ).filter((data) => {
                    return data[0] !== null && data[1] !== null && data[2] !== null;
                })
                .switchMap(() => of(true))
                .catch(() => of(false));
    }
}
