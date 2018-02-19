import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../shared/guards/authentication-guard';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthenticationGuard], data: { breadcrumb: 'Dashboard' } }
    //{ path: '', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRouting { }
