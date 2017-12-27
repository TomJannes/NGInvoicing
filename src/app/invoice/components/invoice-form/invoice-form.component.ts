import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Invoice } from '../../model/invoice';
import { Observable } from 'rxjs/Observable';
import * as fromInvoice from '../../actions/invoice-detail';
import { EventEmitter } from '@angular/core';
import { FormHelper } from '../../../shared/form-helper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Customer } from '../../../customers/model/customer';
import { MatDialog } from '@angular/material';
import { AddInvoiceLineDialogComponent } from '../add-invoice-line-dialog/add-invoice-line-dialog.component';
import { Sku } from '../../../sku/model/sku';

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
  @Input() skus: Sku[];
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  actionType: any;
  successMessage: string;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
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
      sku: null,
      amount: '',
      vat: '',
      price: '',
      total: '',
      totalInc: ''
    });
  }

  onAdd() {
    const control = <FormArray>this.form.controls.lines;
    control.push(this.createLine());
    this.openDialog(control.length);
  }

  openDialog(index: number): void {
    let dialogRef = this.dialog.open(AddInvoiceLineDialogComponent, {
      width: '75%',
      disableClose: true,
      data: { controlContainer: this.form, controlIndex: index - 1, skus: this.skus }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result.save) {
        const control = <FormArray>this.form.controls.lines;
        control.removeAt(result.controlIndex);
      } else {
        this.calculateTotals();
      }
    });
  }

  calculateTotals() {
    let total: number = 0;
    let totalInc: number = 0;
    const control = <FormArray>this.form.controls.lines;
    for(let ctrl of control.controls) {
      total += parseFloat(ctrl.value.total);
      totalInc += parseFloat(ctrl.value.totalInc);
    }
    this.form.controls['total'].patchValue(total.toFixed(2));
    this.form.controls['totalInc'].patchValue(totalInc.toFixed(2));
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
