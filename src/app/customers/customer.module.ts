import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerRouting } from './customer.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CustomerEffects } from './effects/customer';
import { CustomerDetailEffects } from './effects/customer-detail';
import { CustomerTypeEffects } from './effects/customer-type';
import { EffectsModule } from '@ngrx/effects';
import { CustomerService } from './services/customer.service';
// import { HttpClientModule } from '@angular/common/http';

import { CustomerOverviewComponent } from './containers/customer-overview/customer-overview.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
import { CustomerTypeService } from './services/customer-type.service';
import { CustomerDetailCreateGuard } from './containers/customer-detail/customer-detail-create.guard';
import { CustomerDetailEditGuard } from './containers/customer-detail/customer-detail-edit.guard';
import { SharedModule } from '../shared/shared.module';
import { CustomerOverviewGuard } from './containers/customer-overview/customer-overview.guard';
// tslint:disable-next-line:max-line-length
import { CustomerGeneralInfoFormCardComponent } from './components/customer-general-info-form-card/customer-general-info-form-card.component';
import { CustomerContactFormCardComponent } from './components/customer-contact-form-card/customer-contact-form-card.component';
import { CustomerSkusLinkComponent } from './components/customer-skus-link/customer-skus-link.component';
import { SkuModule } from '../sku/sku.module';
import { CustomerSkuDetailComponent } from './components/customer-sku-detail/customer-sku-detail.component';


@NgModule({
  imports: [
    CommonModule,
    //HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRouting,
    SkuModule,
    StoreModule.forFeature('customer', reducers),
    EffectsModule.forFeature([CustomerEffects, CustomerDetailEffects, CustomerTypeEffects]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerOverviewComponent,
    CustomerFormComponent,
    CustomerDetailComponent,
    CustomerFilterComponent,
    CustomerGeneralInfoFormCardComponent,
    CustomerContactFormCardComponent,
    CustomerSkusLinkComponent,
    CustomerSkuDetailComponent
  ],
  providers: [
    CustomerService,
    CustomerTypeService,
    CustomerDetailCreateGuard,
    CustomerDetailEditGuard,
    CustomerOverviewGuard
  ]
})
export class CustomerModule { }
