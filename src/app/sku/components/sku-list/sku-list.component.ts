
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { MatTableDataSource, PageEvent, MatSort, Sort } from '@angular/material';
import { Sku } from '../../model/sku';
import { SkuSearchResult } from '../../model/results/sku-search-result';
import { SkuSearchParams } from '../../model/params/sku-search-params';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkuListComponent implements OnInit {
  totalItemCount: number;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Sku>;

  @Input()
  set data(data: SkuSearchResult) {
    this.dataSource = new MatTableDataSource<Sku>(data.skus);
    this.totalItemCount = data.paging.totalItemCount;
  }
  @Input() parameters: SkuSearchParams;
  @Output() search: EventEmitter<SkuSearchParams> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;

  private searchParams = new Subject<SkuSearchParams>();

  constructor() {
    this.displayedColumns = ['name', 'price', 'vat', 'actions'];
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
