import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './core/containers/login/login.component';
import { AppAfterLoginComponent } from './core/containers/app-after-login/app-after-login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Log in' } },
  {
    path: '', component: AppAfterLoginComponent, children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'customers', loadChildren: './customers/customer.module#CustomerModule', data: { breadcrumb: 'Customers' } },
      { path: 'skus', loadChildren: './sku/sku.module#SkuModule', data: { breadcrumb: 'Stock keeping units' } },
      { path: 'invoices', loadChildren: './invoice/invoice.module#InvoiceModule', data: { breadcrumb: 'Invoices' } },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
    ]
  },
  { path: '**', component: NotFoundPageComponent, data: { breadcrumb: 'Not found' } }
];
