import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkuRouting } from './sku.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SkuEffects } from './effects/sku';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SkuOverviewComponent } from './containers/sku-overview/sku-overview.component';
import { SharedModule } from '../shared/shared.module';
import { SkuOverviewGuard } from './containers/sku-overview/sku-overview.guard';
import { SkuService } from './services/sku.service';
import { SkuListComponent } from './components/sku-list/sku-list.component';
import { SkuFilterComponent } from './components/sku-filter/sku-filter.component';
import { SkuGeneralInfoFormCardComponent } from './components/sku-general-info-form-card/sku-general-info-form-card.component';
import { SkuFormComponent } from './components/sku-form/sku-form.component';
import { SkuDetailComponent } from './containers/sku-detail/sku-detail.component';
import { SkuDetailCreateGuard } from './containers/sku-detail/sku-detail-create.guard';
import { SkuDetailEditGuard } from './containers/sku-detail/sku-detail-edit.guard';
import { SkuDetailEffects } from './effects/sku-detail';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SkuRouting,
    StoreModule.forFeature('sku', reducers),
    EffectsModule.forFeature([SkuEffects, SkuDetailEffects]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    SkuOverviewComponent,
    SkuListComponent,
    SkuFilterComponent,
    SkuGeneralInfoFormCardComponent,
    SkuFormComponent,
    SkuDetailComponent
  ],
  providers: [
    SkuService,
    SkuDetailCreateGuard,
    SkuDetailEditGuard,
    SkuOverviewGuard
  ]
})
export class SkuModule { }
