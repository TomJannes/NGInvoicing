
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MatTableDataSource, PageEvent, MatSort, Sort } from '@angular/material';
import { Invoice } from '../../model/invoice';
import { InvoiceSearchResult } from '../../model/results/invoice-search-result';
import { InvoiceSearchParams } from '../../model/params/invoice-search-params';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceListComponent implements OnInit {
  totalItemCount: number;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Invoice>;

  @Input()
  set data(data: InvoiceSearchResult) {
    this.dataSource = new MatTableDataSource<Invoice>(data.invoices);
    this.totalItemCount = data.paging.totalItemCount;
  }
  @Input() parameters: InvoiceSearchParams;
  @Output() search: EventEmitter<InvoiceSearchParams> = new EventEmitter();
  @Output() download: EventEmitter<string> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;

  private searchParams = new Subject<InvoiceSearchParams>();

  constructor() {
    this.displayedColumns = ['number', 'invoiceDate', 'customer', 'actions'];
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

  onDownload(id: string): void {
    this.download.emit(id);
  }
}
