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
import { Sku } from '../../../sku/model/sku';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  @Input() customerTypes: CustomerTypeSearchResult;
  @Input() skus: Observable<Sku[]>;
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
      contacts: fb.array([]),
      linkedSkus: fb.array([])
    });
  }

  ngOnInit() {
    const contactsControl = <FormArray>this.form.controls.contacts;
    this.customer.contacts.forEach(x => {
      contactsControl.push(this.createContact());
    });

    const linkedSkusControl = <FormArray>this.form.controls.linkedSkus;
    this.customer.linkedSkus.forEach(x => {
      linkedSkusControl.push(this.createLinkedSku());
    });
  }

  createLinkedSku(): FormGroup {
    return this.fb.group({
      _id: '',
      name: ['', Validators.required],
      vat: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  createContact(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      info: ''
    });
  }

  onAddLinkedSku() {
    const control = <FormArray>this.form.controls.linkedSkus;
    control.push(this.createLinkedSku());
  }

  onRemoveLinkedSku(index: number) {
    const control = <FormArray>this.form.controls.linkedSkus;
    control.removeAt(index);
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

  huh() {
    let x = this.form;
  }
}
