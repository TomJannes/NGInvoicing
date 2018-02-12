
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MatTableDataSource, PageEvent, MatSort, Sort } from '@angular/material';
import { Customer } from '../../model/customer';
import { CustomerSearchResult } from '../../model/results/customer-search-result';
import { CustomerSearchParams } from '../../model/params/customer-search-params';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  totalItemCount: number;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Customer>;

  @Input()
  set data(data: CustomerSearchResult) {
    this.dataSource = new MatTableDataSource<Customer>(data.customers);
    this.totalItemCount = data.paging.totalItemCount;
  }
  @Input() parameters: CustomerSearchParams;
  @Output() search: EventEmitter<CustomerSearchParams> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;

  private searchParams = new Subject<CustomerSearchParams>();

  constructor() {
    this.displayedColumns = ['name', 'actions'];
  }

  ngOnInit(): void {
    this.searchParams
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((x) => this.search.emit(x));
  }

  onPageChange(event: PageEvent): void {
    this.search.emit({
      ...this.parameters,
      pagination: {
        ...this.parameters.pagination,
        currentPage: event.pageIndex + 1
      }
    });
  }

  onSort(sort: Sort): void {
    this.searchParams.next({ ...this.parameters, sorting: { field: sort.active, order: sort.direction } });
  }
}
