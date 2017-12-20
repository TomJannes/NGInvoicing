import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkuOverviewComponent } from './containers/sku-overview/sku-overview.component';
import { SkuOverviewGuard } from './containers/sku-overview/sku-overview.guard';
import { SkuDetailCreateGuard } from './containers/sku-detail/sku-detail-create.guard';
import { SkuDetailEditGuard } from './containers/sku-detail/sku-detail-edit.guard';
import { SkuDetailComponent } from './containers/sku-detail/sku-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: SkuOverviewComponent, canActivate: [SkuOverviewGuard], data: { breadcrumb: 'Overview' } },
    { path: 'create', component: SkuDetailComponent, canActivate: [SkuDetailCreateGuard], data: { breadcrumb: 'Create' } },
    { path: 'edit/:id', component: SkuDetailComponent, canActivate: [SkuDetailEditGuard], data: { breadcrumb: 'Edit' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SkuRouting { }
