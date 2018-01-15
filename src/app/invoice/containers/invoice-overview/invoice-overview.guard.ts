import { Injectable } from '@angular/core';
import * as fromInvoice from '../../reducers';
import * as InvoiceActions from '../../actions/invoice';
import { of } from 'rxjs/observable/of';
import * as LayoutActions from '../../actions/layout';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class InvoiceOverviewGuard implements CanActivate {
    constructor(private store: Store<fromInvoice.State>) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        this.store.dispatch(new LayoutActions.CloseFilter());
        this.store.dispatch(new InvoiceActions.Reset());
        return this.store.select(fromInvoice.getInvoices)
            .filter((data) => {
                return data.invoices !== null;
            })
            .take(1)
            .switchMap(() => of(true))
            .catch(() => of(false));
    }
}
