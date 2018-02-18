import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRouting } from './profile.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ProfileEffects } from './effects/profile';
import { EffectsModule } from '@ngrx/effects';
import { ProfileService } from './services/profile.service';

import { SharedModule } from '../shared/shared.module';
import { ProfileDetailComponent } from './containers/profile-detail/profile-detail.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileGeneralInfoFormCardComponent } from './components/profile-general-info-form-card/profile-general-info-form-card.component';
import { ProfileDetailEditGuard } from './containers/profile-detail/profile-detail-edit.guard';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRouting,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ProfileDetailComponent,
    ProfileFormComponent,
    ProfileGeneralInfoFormCardComponent
  ],
  providers: [
    ProfileDetailEditGuard,
    ProfileService
  ]
})
export class ProfileModule { }
