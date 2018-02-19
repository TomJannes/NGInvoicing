import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import { CustomerOverviewComponent } from './containers/customer-overview/customer-overview.component';
import { CustomerDetailCreateGuard } from './containers/customer-detail/customer-detail-create.guard';
import { CustomerDetailEditGuard } from './containers/customer-detail/customer-detail-edit.guard';
import { CustomerOverviewGuard } from './containers/customer-overview/customer-overview.guard';
import { AuthenticationGuard } from '../shared/guards/authentication-guard';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: CustomerOverviewComponent, canActivate: [AuthenticationGuard, CustomerOverviewGuard], data: { breadcrumb: 'Overview' } },
    { path: 'create', component: CustomerDetailComponent, canActivate: [AuthenticationGuard, CustomerDetailCreateGuard], data: { breadcrumb: 'Create' } },
    { path: 'edit/:id', component: CustomerDetailComponent, canActivate: [AuthenticationGuard, CustomerDetailEditGuard], data: { breadcrumb: 'Edit' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRouting { }
