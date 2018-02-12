import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { InvoiceLine } from '../../model/invoice';

@Component({
  selector: 'app-invoice-lines-form-card',
  templateUrl: './invoice-lines-form-card.component.html',
  styleUrls: ['./invoice-lines-form-card.component.scss']
})
export class InvoiceLinesFormCardComponent implements OnInit {
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor(public controlContainer: ControlContainer) { 
  }

  ngOnInit() {
  }

  onRemove(index: number) {
    this.remove.emit(index);
  }

  onAddNew() {
    this.add.emit(null);
  }

}
