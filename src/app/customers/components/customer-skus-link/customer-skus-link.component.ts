import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../../../sku/model/sku';

@Component({
  selector: 'app-customer-skus-link',
  templateUrl: './customer-skus-link.component.html',
  styleUrls: ['./customer-skus-link.component.scss']
})
export class CustomerSkusLinkComponent implements OnInit {
  @Input() skus: Observable<Sku[]>;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  openedIndex: number;
  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  onRemove(index: number) {
    this.remove.emit(index);
  }

  onAddNew() {
    this.add.emit(null);
    this.openedIndex = this.controlContainer.value.linkedSkus.length - 1;
  }

  onOpen(i) {
    this.openedIndex = i;
  }
}
