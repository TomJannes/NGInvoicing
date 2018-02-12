import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromInvoice from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '../../model/invoice';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as invoice from '../../actions/invoice';
import * as layout from '../../actions/layout';
import { InvoiceSearchResult } from '../../model/results/invoice-search-result';
import { InvoiceSearchParams } from '../../model/params/invoice-search-params';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.component.html',
  styleUrls: ['./invoice-overview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceOverviewComponent {
  data$: Observable<InvoiceSearchResult>;
  parameters$: Observable<InvoiceSearchParams>;
  showFilter$: Observable<boolean>;

  constructor(private store: Store<fromInvoice.State>) {
    this.data$ = this.store.select(fromInvoice.getInvoices);
    this.parameters$ = this.store.select(fromInvoice.getInvoiceParameters);
    this.showFilter$ = this.store.select(fromInvoice.getFilterLayout);
  }

  onSearch(event: InvoiceSearchParams) {
    this.store.dispatch(new invoice.UpdateSearchParameters(event));
  }

  onToggleFilterVisibility() {
    this.store.dispatch(new layout.ToggleFilterVisibility());
  }

  onDownload(event: string) {
    this.store.dispatch(new invoice.Download(event))
  }
}
