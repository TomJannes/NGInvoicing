import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';

const routes: Routes = [
    { path: '', component: ProfileDetailComponent, data: { breadcrumb: 'Profile' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
