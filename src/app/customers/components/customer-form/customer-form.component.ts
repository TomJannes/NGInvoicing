import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { CustomerType } from '../../model/customer-type';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';
import { Customer } from '../../model/customer';
import { Observable } from 'rxjs/Observable';
import * as fromCustomer from '../../actions/customer-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  @Input() customerTypes: CustomerTypeSearchResult;
  @Input() customer: Customer;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder) {
    this.actionType = fromCustomer.FormUpdate;
    this.successMessage = fromCustomer.SAVE_SUCCESS;

    this.form = fb.group({
      type: null,
      name: ['', Validators.required],
      address: fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        bus: ['', Validators.required],
        zip: ['', Validators.required],
        place: ['', Validators.required] 
      })
    });
  }

  submit() {
    FormHelper.validateAllFormFields(this.form);
    if (this.form.valid) {
      this.save.emit(null);
    }
  }

  ngOnInit() {
  }

  

}
