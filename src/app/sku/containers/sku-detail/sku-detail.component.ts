import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../../model/sku';
import { Store } from '@ngrx/store';
import * as fromSku from '../../reducers';
import * as SkuActions from '../../actions/sku-detail';
import * as RouterActions from '../../../shared/router/router.actions';

@Component({
  selector: 'app-sku-detail',
  templateUrl: './sku-detail.component.html',
  styleUrls: ['./sku-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkuDetailComponent {
  selectedSku$: Observable<Sku>;

  constructor(private store: Store<fromSku.State>) {
    this.selectedSku$ = this.store.select(fromSku.getSelectedSku).take(1);
  }

  save() {
    this.store.dispatch(new SkuActions.Save());
  }

  cancel() {
    this.store.dispatch(new SkuActions.Reset());
    this.store.dispatch(new RouterActions.Go({ path: ['/skus/overview'] }));
  }
}
