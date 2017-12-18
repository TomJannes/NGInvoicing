import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetail } from './containers/profile-detail/profile-detail.component';

const routes: Routes = [
    { path: '', component: ProfileDetail, data: { breadcrumb: 'Profile' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
