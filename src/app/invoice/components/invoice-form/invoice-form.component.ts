import { Component, OnInit, ViewEncapsulation, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
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
import { InvoiceState } from '../../model/invoice-state';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() invoice: Invoice;
  @Input() customers: Customer[];
  @Input() skus: Sku[];
  @Input() invoiceStates: InvoiceState[];
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() recalculateTotals: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = fb.group({
      customer: null,
      state: null,
      number: null,
      invoiceDate: new Date(),
      total: '',
      totalInc: '',
      totalVat: '',
      lines: fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.invoice.previousValue !== undefined) {
      this.form.patchValue(changes.invoice.currentValue);
    }
  }
  ngOnInit(): void {
    const control = <FormArray>this.form.controls.lines;
    this.invoice.lines.forEach(x => {
      control.push(this.createLine());
    });
    this.form.patchValue(this.invoice);
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
        this.remove(result.controlIndex);
      } else {
        this.recalculateTotals.emit({ data: this.form.value });
      }
    });
  }

  remove(index: number) {
    const control = <FormArray>this.form.controls.lines;
    control.removeAt(index);
  }

  onRemove(index: number) {
    this.remove(index);
    this.recalculateTotals.emit({ data: this.form.value });
  }

  onSubmit() {
    FormHelper.validateAllFormFields(this.form);
    if (this.form.valid) {
      this.save.emit({ data: Object.assign({}, this.invoice, this.form.value) });
    }
  }

  onCancel() {
    this.cancel.emit(null);
  }
}
