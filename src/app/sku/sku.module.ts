import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkuRouting } from './sku.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { SkuEffects } from './effects/sku';
// import { CustomerDetailEffects } from './effects/customer-detail';
// import { CustomerTypeEffects } from './effects/customer-type';
import { EffectsModule } from '@ngrx/effects';
// import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { SkuOverviewComponent } from './containers/sku-overview/sku-overview.component';

// import { CustomerOverviewComponent } from './containers/customer-overview/customer-overview.component';
// import { CustomerListComponent } from './components/customer-list/customer-list.component';
// import { CustomerFormComponent } from './components/customer-form/customer-form.component';
// import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
// import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
// import { CustomerTypeService } from './services/customer-type.service';
// import { CustomerDetailCreateGuard } from './containers/customer-detail/customer-detail-create.guard';
// import { CustomerDetailEditGuard } from './containers/customer-detail/customer-detail-edit.guard';
import { SharedModule } from '../shared/shared.module';
import { SkuOverviewGuard } from './containers/sku-overview/sku-overview.guard';
import { SkuService } from './services/sku.service';
import { SkuListComponent } from './components/sku-list/sku-list.component';
import { SkuFilterComponent } from './components/sku-filter/sku-filter.component';
// import { CustomerOverviewGuard } from './containers/customer-overview/customer-overview.guard';
// import { CustomerGeneralInfoFormCardComponent } from './components/customer-general-info-form-card/customer-general-info-form-card.component';
// import { CustomerContactFormCardComponent } from './components/customer-contact-form-card/customer-contact-form-card.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SkuRouting,
    StoreModule.forFeature('sku', reducers),
    EffectsModule.forFeature([SkuEffects/*, CustomerDetailEffects, CustomerTypeEffects*/]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    SkuOverviewComponent,
    SkuListComponent,
    SkuFilterComponent
    /*
    CustomerFormComponent,
    CustomerDetailComponent,
    CustomerGeneralInfoFormCardComponent,
    CustomerContactFormCardComponent*/
  ],
  providers: [
    SkuService,
    /*CustomerDetailCreateGuard,
    CustomerDetailEditGuard,*/
    SkuOverviewGuard
  ]
})
export class SkuModule { }
