import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../../model/invoice';
import { Store } from '@ngrx/store';
import * as fromInvoice from '../../reducers';
import * as InvoiceActions from '../../actions/invoice-detail';
import * as RouterActions from '../../../shared/router/router.actions';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceDetailComponent {
  selectedInvoice$: Observable<Invoice>;

  constructor(private store: Store<fromInvoice.State>) {
    this.selectedInvoice$ = this.store.select(fromInvoice.getSelectedInvoice).take(1);
  }

  save() {
    this.store.dispatch(new InvoiceActions.Save());
  }

  cancel() {
    this.store.dispatch(new InvoiceActions.Reset());
    this.store.dispatch(new RouterActions.Go({ path: ['/invoices/overview'] }));
  }
}
