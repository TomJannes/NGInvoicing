import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';

@Component({
  selector: 'app-customer-general-info-form-card',
  templateUrl: './general-info-form-card.component.html',
  styleUrls: ['./general-info-form-card.component.css']
})
export class CustomerGeneralInfoFormCardComponent implements OnInit {
  @Input() customerTypes: CustomerTypeSearchResult;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  compare(val1, val2) {
    return val1 && val2 && val1.id === val2.id;
  }

}
