import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';
import { ProfileDetailEditGuard } from './containers/profile-detail/profile-detail-edit.guard';
import { AuthenticationGuard } from '../shared/guards/authentication-guard';

const routes: Routes = [
    { path: '', component: ProfileDetailComponent, canActivate: [AuthenticationGuard, ProfileDetailEditGuard ], data: { breadcrumb: 'Profile' } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRouting { }
