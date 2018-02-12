import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';
import { Customer } from '../../model/customer';
import { Store } from '@ngrx/store';
import * as fromCustomer from '../../reducers';
import * as CustomerActions from '../../actions/customer-detail';
import * as RouterActions from '../../../shared/router/router.actions';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomerDetailComponent {
  customerTypes$: Observable<CustomerTypeSearchResult>;
  selectedCustomer$: Observable<Customer>;

  constructor(private store: Store<fromCustomer.State>) {
    this.customerTypes$ = this.store.select(fromCustomer.getCustomerTypes).take(1);
    this.selectedCustomer$ = this.store.select(fromCustomer.getSelectedCustomer).take(1);
  }

  save() {
    this.store.dispatch(new CustomerActions.Save());
  }

  cancel() {
    this.store.dispatch(new CustomerActions.Reset());
    this.store.dispatch(new RouterActions.Go({ path: ['/customers/overview'] }));
  }
}
