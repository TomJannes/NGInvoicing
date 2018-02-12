import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent } from '@angular/material';
import { ControlContainer } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../../../sku/model/sku';

@Component({
  selector: 'app-add-invoice-line-dialog',
  templateUrl: './add-invoice-line-dialog.component.html',
  styleUrls: ['./add-invoice-line-dialog.component.scss']
})
export class AddInvoiceLineDialogComponent implements OnInit {
  filteredSkus: Observable<Sku[]>;
  constructor(
    public dialogRef: MatDialogRef<AddInvoiceLineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
  }

  onSave(): void {
    this.dialogRef.close({ save: true, controlIndex: this.data.controlIndex });
  }

  onCancel(): void {
    this.dialogRef.close({ save: false, controlIndex: this.data.controlIndex });
  }

  ngOnInit() {
    this.filteredSkus = this.data.controlContainer.get('lines').controls[this.data.controlIndex].get('sku').valueChanges
      .startWith(null)
      .map(val =>{
        return val && typeof val === 'object' ? val.name : val;
      } )
      .map(val => val ? this.filter(val) : this.data.skus.slice());
  }

  skuSelectionChanged(event) {
    const lineCtrl = this.data.controlContainer.get('lines').controls[this.data.controlIndex];
    lineCtrl.get('vat').patchValue(event.option.value.vat);
    lineCtrl.get('price').patchValue(event.option.value.price);
    let amount = lineCtrl.get('amount').value;

    this.calculateTotals(amount, event.option.value.price, event.option.value.vat);
  }

  recalculate() {
    const lineCtrl = this.data.controlContainer.get('lines').controls[this.data.controlIndex];
    const vat = lineCtrl.get('vat').value;
    const price = lineCtrl.get('price').value;
    const amount = lineCtrl.get('amount').value;
    this.calculateTotals(amount, price, vat);
  }

  calculateTotals(amount: number, price: number, vat: number) {
    const lineCtrl = this.data.controlContainer.get('lines').controls[this.data.controlIndex];
    let total = (price * (amount !== null ? amount : 0));
    let totalInc = total * (1 + (vat / 100));
    lineCtrl.get('total').patchValue(total.toFixed(2));
    lineCtrl.get('totalInc').patchValue(totalInc.toFixed(2));
  }

  filter(val: string): Sku[] {
    return this.data.skus.filter(option =>
      option.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  skuToNameConverter(sku: Sku): string {
    return sku ? sku.name : null;
  }

}
