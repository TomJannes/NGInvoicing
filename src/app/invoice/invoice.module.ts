import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InvoiceRouting } from './invoice.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { InvoiceEffects } from './effects/invoice';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceOverviewComponent } from './containers/invoice-overview/invoice-overview.component';
import { SharedModule } from '../shared/shared.module';
import { InvoiceOverviewGuard } from './containers/invoice-overview/invoice-overview.guard';
import { InvoiceService } from './services/invoice.service';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceFilterComponent } from './components/invoice-filter/invoice-filter.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { InvoiceDetailComponent } from './containers/invoice-detail/invoice-detail.component';
import { InvoiceDetailCreateGuard } from './containers/invoice-detail/invoice-detail-create.guard';
import { InvoiceDetailEditGuard } from './containers/invoice-detail/invoice-detail-edit.guard';
import { InvoiceDetailEffects } from './effects/invoice-detail';
import { InvoiceGeneralInfoFormCardComponent } from './components/invoice-general-info-form-card/invoice-general-info-form-card.component';
import { CustomerModule } from '../customers/customer.module';
import { InvoiceLinesFormCardComponent } from './components/invoice-lines-form-card/invoice-lines-form-card.component';
import { AddInvoiceLineDialogComponent } from './components/add-invoice-line-dialog/add-invoice-line-dialog.component';
import { SkuModule } from '../sku/sku.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceRouting,
    CustomerModule,
    SkuModule,
    StoreModule.forFeature('invoice', reducers),
    EffectsModule.forFeature([InvoiceEffects, InvoiceDetailEffects]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    InvoiceOverviewComponent,
    InvoiceListComponent,
    InvoiceFilterComponent,
    InvoiceFormComponent,
    InvoiceDetailComponent,
    InvoiceGeneralInfoFormCardComponent,
    InvoiceLinesFormCardComponent,
    AddInvoiceLineDialogComponent
  ],
  entryComponents: [
    AddInvoiceLineDialogComponent
  ],
  providers: [
    InvoiceService,
    InvoiceDetailCreateGuard,
    InvoiceDetailEditGuard,
    InvoiceOverviewGuard
  ]
})
export class InvoiceModule { }
