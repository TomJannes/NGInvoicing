import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { CustomerSearchParams } from '../../model/params/customer-search-params';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CustomerFilterComponent implements OnInit {
  searchForm: FormGroup;

  @Output() search: EventEmitter<CustomerSearchParams> = new EventEmitter();
  @Output() toggleFilterVisibility: EventEmitter<any> = new EventEmitter();
  @Input() showFilter: boolean;
  @Input() parameters: CustomerSearchParams;
  private searchParams = new Subject<CustomerSearchParams>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      name: ''
    });

    this.searchParams
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((x) => this.search.emit(x));
  }

  onSearch() {
    this.searchParams.next({
      ...this.parameters,
      ...this.searchForm.value,
      ...{ pagination: { ...this.parameters.pagination, ...{ currentPage: 1 } } }
      });
  }

  toggleFilter() {
    this.toggleFilterVisibility.emit(null);
  }
}
