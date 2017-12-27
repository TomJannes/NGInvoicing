import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Invoice } from '../../model/invoice';
import { Observable } from 'rxjs/Observable';
import * as fromInvoice from '../../actions/invoice-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Customer } from '../../../customers/model/customer';
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
  @Input() customers: Customer[];
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
      total: '',
      totalInc: '',
      totalVat: '',
      lines: fb.array([])
    });
  }

  ngOnInit() {
    const control = <FormArray>this.form.controls.lines;
    this.invoice.lines.forEach(x => {
      control.push(this.createLine());
    });
  }

  createLine(): FormGroup {
    return this.fb.group({
      sku: this.fb.group({
        name: '',
        vat: '',
        price: ''
      }),
      amount: '',
      total: '',
      totalInc: ''
    });
  }

  onAdd() {
    const control = <FormArray>this.form.controls.lines;
    control.push(this.createLine());
  }

  onRemove(index: number) {
    const control = <FormArray>this.form.controls.lines;
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
