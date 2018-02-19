import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceOverviewComponent } from './containers/invoice-overview/invoice-overview.component';
import { InvoiceOverviewGuard } from './containers/invoice-overview/invoice-overview.guard';
import { InvoiceDetailCreateGuard } from './containers/invoice-detail/invoice-detail-create.guard';
import { InvoiceDetailEditGuard } from './containers/invoice-detail/invoice-detail-edit.guard';
import { InvoiceDetailComponent } from './containers/invoice-detail/invoice-detail.component';
import { AuthenticationGuard } from '../shared/guards/authentication-guard';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: InvoiceOverviewComponent, canActivate: [AuthenticationGuard, InvoiceOverviewGuard], data: { breadcrumb: 'Overview' } },
    { path: 'create', component: InvoiceDetailComponent, canActivate: [AuthenticationGuard, InvoiceDetailCreateGuard], data: { breadcrumb: 'Create' } },
    { path: 'edit/:id', component: InvoiceDetailComponent, canActivate: [AuthenticationGuard, InvoiceDetailEditGuard], data: { breadcrumb: 'Edit' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceRouting { }
