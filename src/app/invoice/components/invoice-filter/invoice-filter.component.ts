import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { InvoiceSearchParams } from '../../model/params/invoice-search-params';

@Component({
  selector: 'app-invoice-filter',
  templateUrl: './invoice-filter.component.html',
  styleUrls: ['./invoice-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class InvoiceFilterComponent implements OnInit {
  searchForm: FormGroup;

  @Output() search: EventEmitter<InvoiceSearchParams> = new EventEmitter();
  @Output() toggleFilterVisibility: EventEmitter<any> = new EventEmitter();
  @Input() showFilter: boolean;
  @Input() parameters: InvoiceSearchParams;
  private searchParams = new Subject<InvoiceSearchParams>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      id: '',
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
