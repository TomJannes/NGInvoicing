import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Contact } from '../../model/customer';

@Component({
  selector: 'app-customer-contact-form-card',
  templateUrl: './customer-contact-form-card.component.html',
  styleUrls: ['./customer-contact-form-card.component.scss']
})
export class CustomerContactFormCardComponent implements OnInit {
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  onRemove(index: number) {
    this.remove.emit(index);
  }

  onAddNew() {
    this.add.emit(null);
  }
}
