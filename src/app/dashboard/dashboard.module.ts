import { DashboardRouting } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
