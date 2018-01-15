import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { CustomerTypeSearchResult } from '../../model/results/customer-type-search-result';

@Component({
  selector: 'app-customer-general-info-form-card',
  templateUrl: './customer-general-info-form-card.component.html',
  styleUrls: ['./customer-general-info-form-card.component.css']
})
export class CustomerGeneralInfoFormCardComponent implements OnInit {
  @Input() customerTypes: CustomerTypeSearchResult;

  constructor(public controlContainer: ControlContainer) { }

  ngOnInit() {
  }

  compare(val1, val2) {
    return val1 && val2 && val1._id === val2._id;
  }

}
