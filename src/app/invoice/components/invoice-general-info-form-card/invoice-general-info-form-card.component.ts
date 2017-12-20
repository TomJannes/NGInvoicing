import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../customers/model/customer';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-invoice-general-info-form-card',
  templateUrl: './invoice-general-info-form-card.component.html',
  styleUrls: ['./invoice-general-info-form-card.component.css']
})
export class InvoiceGeneralInfoFormCardComponent implements OnInit {
  @Input() customers: Customer[];

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  compare(val1, val2) {
    return val1 && val2 && val1.id === val2.id;
  }
}
