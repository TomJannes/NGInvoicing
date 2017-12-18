import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app/app.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './../material.module';

// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';

export const COMPONENTS = [
  ToolbarComponent,
  NavigationComponent,
  BreadcrumbComponent,
  AppComponent,
  NotFoundPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule/*,
      providers: [GoogleBooksService],*/
    };
  }
}
