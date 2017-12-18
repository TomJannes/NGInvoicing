import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRouting } from './profile.routing';
import { MaterialModule } from './../material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ProfileEffects } from './effects/profile';
import { CustomerDetailEffects } from './effects/customer-detail';
import { EffectsModule } from '@ngrx/effects';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';



import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRouting,
    StoreModule.forFeature('profile', reducers),
    EffectsModule.forFeature([ProfileEffects]),
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ProfileDetailComponent
  ]
})
export class ProfileModule { }
