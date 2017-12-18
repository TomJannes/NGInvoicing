import { Component } from '@angular/core';
import * as fromSku from '../../reducers'
import { Observable } from 'rxjs/Observable';
import { SkuSearchResult } from '../../model/results/sku-search-result';
import { SkuSearchParams } from '../../model/params/sku-search-params';
import { Store } from '@ngrx/store';
import * as customer from '../../actions/sku';
import * as layout from '../../actions/layout';

@Component({
  selector: 'app-sku-overview',
  templateUrl: './sku-overview.component.html',
  styleUrls: ['./sku-overview.component.css']
})
export class SkuOverviewComponent {
  data$: Observable<SkuSearchResult>;
  parameters$: Observable<SkuSearchParams>;
  showFilter$: Observable<boolean>;

  constructor(private store: Store<fromSku.State>) {
    this.data$ = this.store.select(fromSku.getSkus);
    this.parameters$ = this.store.select(fromSku.getSkuParameters);
    this.showFilter$ = this.store.select(fromSku.getFilterLayout);
  }

  onSearch(event: SkuSearchParams) {
    this.store.dispatch(new customer.UpdateSearchParameters(event));
  }

  onToggleFilterVisibility() {
    this.store.dispatch(new layout.ToggleFilterVisibility());
  }
}
// import { Component, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
// import { Store } from '@ngrx/store';
// import * as fromCustomer from '../../reducers';
// import { Observable } from 'rxjs/Observable';
// import { Customer } from '../../model/customer';
// import { MatPaginator, MatTableDataSource } from '@angular/material';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import * as customer from '../../actions/customer';
// import * as layout from '../../actions/layout';
// import { CustomerSearchResult } from '../../model/results/customer-search-result';
// import { CustomerSearchParams } from '../../model/params/customer-search-params';

// @Component({
//   selector: 'app-customer-overview',
//   templateUrl: './customer-overview.component.html',
//   styleUrls: ['./customer-overview.component.css'],
//   encapsulation: ViewEncapsulation.Emulated
// })
// export class CustomerOverviewComponent {
//   data$: Observable<CustomerSearchResult>;
//   parameters$: Observable<CustomerSearchParams>;
//   showFilter$: Observable<boolean>;

//   constructor(private store: Store<fromCustomer.State>) {
//     this.data$ = this.store.select(fromCustomer.getCustomers);
//     this.parameters$ = this.store.select(fromCustomer.getCustomerParameters);
//     this.showFilter$ = this.store.select(fromCustomer.getFilterLayout);
//   }

//   onSearch(event: CustomerSearchParams) {
//     this.store.dispatch(new customer.UpdateSearchParameters(event));
//   }

//   onToggleFilterVisibility() {
//     this.store.dispatch(new layout.ToggleFilterVisibility());
//   }
// }
