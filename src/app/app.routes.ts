import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
// import { AuthGuard } from './auth/services/auth-guard.service';
// import { NotFoundPageComponent } from './core/containers/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'customers', loadChildren: './customers/customer.module#CustomerModule', data: { breadcrumb: 'Customers' } },
  { path: '**', component: NotFoundPageComponent, data: { breadcrumb: 'Not found' } },
];
