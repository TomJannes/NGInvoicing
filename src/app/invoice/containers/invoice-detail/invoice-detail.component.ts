import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../../model/invoice';
import { Store } from '@ngrx/store';
import * as fromInvoice from '../../reducers';
import * as fromCustomer from '../../../customers/reducers';
import * as fromSku from '../../../sku/reducers';
import * as InvoiceActions from '../../actions/invoice-detail';
import * as RouterActions from '../../../shared/router/router.actions';
import { Customer } from '../../../customers/model/customer';
import { Sku } from '../../../sku/model/sku';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceDetailComponent {
  selectedInvoice$: Observable<Invoice>;
  customers$: Observable<Customer[]>;
  skus$: Observable<Sku[]>;

  constructor(private store: Store<fromInvoice.State>) {
    this.selectedInvoice$ = this.store.select(fromInvoice.getSelectedInvoice).take(1);
    this.customers$ = this.store.select(fromCustomer.getCustomers).map((val) => val.customers).take(1);
    this.skus$ = this.store.select(fromSku.getSkus).map((val) => val.skus).take(1);
  }

  save() {
    this.store.dispatch(new InvoiceActions.Save());
  }

  cancel() {
    this.store.dispatch(new InvoiceActions.Reset());
    this.store.dispatch(new RouterActions.Go({ path: ['/invoices/overview'] }));
  }
}
