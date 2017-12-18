import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { SkuSearchParams } from '../../model/params/sku-search-params';

@Component({
  selector: 'app-sku-filter',
  templateUrl: './sku-filter.component.html',
  styleUrls: ['./sku-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkuFilterComponent implements OnInit {
  searchForm: FormGroup;

  @Output() search: EventEmitter<SkuSearchParams> = new EventEmitter();
  @Output() toggleFilterVisibility: EventEmitter<any> = new EventEmitter();
  @Input() showFilter: boolean;
  @Input() parameters: SkuSearchParams;
  private searchParams = new Subject<SkuSearchParams>();

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
