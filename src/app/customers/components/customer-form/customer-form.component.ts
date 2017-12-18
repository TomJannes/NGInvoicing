import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { CustomerType } from '../../model/customer-type';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';
import { Customer, Contact } from '../../model/customer';
import { Observable } from 'rxjs/Observable';
import * as fromCustomer from '../../actions/customer-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CustomerContactFormCardComponent } from '../customer-contact-form-card/customer-contact-form-card.component';

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
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder) {
    this.actionType = fromCustomer.FormUpdate;
    this.successMessage = fromCustomer.SAVE_SUCCESS;

    this.form = fb.group({
      type: null,
      name: ['', Validators.required],
      kbo: '',
      address: fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        bus: '',
        zip: ['', Validators.required],
        place: ['', Validators.required]
      }),
      contacts: fb.array([])
    });
  }

  ngOnInit() {
    const control = <FormArray>this.form.controls.contacts;
    this.customer.contacts.forEach(x => {
      control.push(this.createContact());
    });
  }

  createContact(): FormGroup {
    return this.fb.group({
      id: '',
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: '',
      phone: '',
      info: ''
    });
  }

  onAdd() {
    const control = <FormArray>this.form.controls.contacts;
    control.push(this.createContact());
  }

  onRemove(index: number) {
    const control = <FormArray>this.form.controls.contacts;
    control.removeAt(index);
  }

  onSubmit() {
    FormHelper.validateAllFormFields(this.form);
    if (this.form.valid) {
      this.save.emit(null);
    }
  }

  onCancel() {
    this.cancel.emit(null);
  }
}
