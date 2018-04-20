import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../../../sku/model/sku';
import { ControlContainer, FormArray } from '@angular/forms';

@Component({
  selector: 'app-customer-sku-detail',
  templateUrl: './customer-sku-detail.component.html',
  styleUrls: ['./customer-sku-detail.component.scss']
})
export class CustomerSkuDetailComponent implements OnInit {
  @Input() skus: Observable<Sku[]>;
  @Input() openedIndex: number;
  @Input() index: number;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() open: EventEmitter<number> = new EventEmitter<number>();

  filteredSkus: Observable<Sku[]>;
  skusforLines: Observable<Sku[]>[];

  selectedSku: Sku;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
    this.filteredSkus = this.skus;
    this.selectedSku = this.controlContainer.value as Sku;
  }

  skuSelectionChanged(event) {
    this.controlContainer.control.patchValue(event.value);
  }

  onRemove() {
    this.remove.emit();
  }

  compare(val1, val2) {
    return val1 && val2 && val1._id === val2._id;
  }

  onOpen() {
    this.open.emit(this.index);
  }
}
