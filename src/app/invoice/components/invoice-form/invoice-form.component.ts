import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Invoice } from '../../model/invoice';
import { Observable } from 'rxjs/Observable';
import * as fromInvoice from '../../actions/invoice-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
// import { InvoiceContactFormCardComponent } from '../invoice-contact-form-card/invoice-contact-form-card.component';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceFormComponent implements OnInit {
  form: FormGroup;
  @Input() invoice: Invoice;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder) {
    this.actionType = fromInvoice.FormUpdate;
    this.successMessage = fromInvoice.SAVE_SUCCESS;

    this.form = fb.group({
      customer: null,
      number: null,
      // name: ['', Validators.required],
      // kbo: '',
      // address: fb.group({
      //   street: ['', Validators.required],
      //   number: ['', Validators.required],
      //   bus: '',
      //   zip: ['', Validators.required],
      //   place: ['', Validators.required]
      // }),
      // contacts: fb.array([])
    });
  }

  ngOnInit() {
    // const control = <FormArray>this.form.controls.contacts;
    // this.invoice.contacts.forEach(x => {
    //   control.push(this.createContact());
    // });
  }

  // createContact(): FormGroup {
  //   return this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: '',
  //     phone: '',
  //     info: ''
  //   });
  // }

  // onAdd() {
  //   const control = <FormArray>this.form.controls.contacts;
  //   control.push(this.createContact());
  // }

  // onRemove(index: number) {
  //   const control = <FormArray>this.form.controls.contacts;
  //   control.removeAt(index);
  // }

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
