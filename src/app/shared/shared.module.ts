import { NgModule } from '@angular/core';
import { ConnectFormDirective } from '../shared/connect-form.directive';
import { AddressFormCardComponent } from './components/address-form-card/address-form-card.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ConnectFormDirective,
    AddressFormCardComponent
  ],
  exports: [
    ConnectFormDirective,
    AddressFormCardComponent
  ],
  providers: [
    
  ]
})
export class SharedModule {
}
