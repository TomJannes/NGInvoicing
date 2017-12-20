import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromInvoice from '../../reducers';
import * as InvoiceDetailActions from '../../actions/invoice-detail';
import * as CustomerActions from '../../../customers/actions/customer';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/zip';

@Injectable()
export class InvoiceDetailEditGuard implements CanActivate {
    constructor(private store: Store<fromInvoice.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new InvoiceDetailActions.Get(route.params.id));
        this.store.dispatch(new CustomerActions.UpdateSearchParameters(null));
        return Observable.zip(
                    this.store.select(fromInvoice.getSelectedInvoice).filter((data) => data.id === Number(route.params.id)).take(1),
                    this.store.select(fromInvoice.getSelectedInvoice).filter((data) => data.id === Number(route.params.id)).take(1),
                ).filter((data) => {
                    return data[0] !== null && data[1] !== null;
                })
                .switchMap(() => of(true))
                .catch(() => of(false));
    }
}
