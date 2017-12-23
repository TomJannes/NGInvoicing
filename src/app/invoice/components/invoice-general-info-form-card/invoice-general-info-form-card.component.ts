import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../customers/model/customer';
import { ControlContainer, FormControl } from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-invoice-general-info-form-card',
  templateUrl: './invoice-general-info-form-card.component.html',
  styleUrls: ['./invoice-general-info-form-card.component.css']
})
export class InvoiceGeneralInfoFormCardComponent implements OnInit {
  @Input() customers: Customer[];

  filteredCustomers: Observable<Customer[]>;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
    this.filteredCustomers = this.controlContainer.control.get("customer").valueChanges
      .startWith(null)
      .map(val => val && typeof val === 'object' ? val.name : val)
      .map(val => val ? this.filter(val) : this.customers.slice());
  }

  filter(val: string): Customer[] {
    return this.customers.filter(option =>
      option.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  customerToNameConverter(customer: Customer): string {
    return customer ? customer.name : null;
  }
}
