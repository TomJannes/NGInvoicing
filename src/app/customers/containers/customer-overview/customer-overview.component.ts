import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCustomer from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../model/customer';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as customer from '../../actions/customer';
import * as layout from '../../actions/layout';
import { CustomerSearchResult } from '../../model/results/customer-search-result';
import { CustomerSearchParams } from '../../model/params/customer-search-params';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomerOverviewComponent {
  data$: Observable<CustomerSearchResult>;
  parameters$: Observable<CustomerSearchParams>;
  showFilter$: Observable<boolean>;

  constructor(private store: Store<fromCustomer.State>) {
    this.data$ = this.store.select(fromCustomer.getCustomers);
    this.parameters$ = this.store.select(fromCustomer.getCustomerParameters);
    this.showFilter$ = this.store.select(fromCustomer.getFilterLayout);
  }

  onDelete(id: string) {
    this.store.dispatch(new customer.Delete(id));
  }

  onSearch(event: CustomerSearchParams) {
    this.store.dispatch(new customer.UpdateSearchParameters(event));
  }

  onToggleFilterVisibility() {
    this.store.dispatch(new layout.ToggleFilterVisibility());
  }
}
