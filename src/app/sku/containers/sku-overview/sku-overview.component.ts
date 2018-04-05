import { Component } from '@angular/core';
import * as fromSku from '../../reducers'
import { Observable } from 'rxjs/Observable';
import { SkuSearchResult } from '../../model/results/sku-search-result';
import { SkuSearchParams } from '../../model/params/sku-search-params';
import { Store } from '@ngrx/store';
import * as sku from '../../actions/sku';
import * as layout from '../../actions/layout';

@Component({
  selector: 'app-sku-overview',
  templateUrl: './sku-overview.component.html',
  styleUrls: ['./sku-overview.component.scss']
})
export class SkuOverviewComponent {
  data$: Observable<SkuSearchResult>;
  parameters$: Observable<SkuSearchParams>;
  showFilter$: Observable<boolean>;

  constructor(private store: Store<fromSku.State>) {
    this.data$ = this.store.select(fromSku.getSkus);
    this.parameters$ = this.store.select(fromSku.getSkuParameters);
    this.showFilter$ = this.store.select(fromSku.getFilterLayout);
  }

  onDelete(id: string) {
    this.store.dispatch(new sku.Delete(id));
  }

  onSearch(event: SkuSearchParams) {
    this.store.dispatch(new sku.UpdateSearchParameters(event));
  }

  onToggleFilterVisibility() {
    this.store.dispatch(new layout.ToggleFilterVisibility());
  }
}
