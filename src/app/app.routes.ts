import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { Routes } from '@angular/router';
import { AppAfterLoginComponent } from './core/containers/app-after-login/app-after-login.component';
import { SignInComponent } from './core/containers/sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, data: { breadcrumb: 'Sign in' } },
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
