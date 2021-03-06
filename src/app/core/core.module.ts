import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app/app.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from './../material.module';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppAfterLoginComponent } from './containers/app-after-login/app-after-login.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

export const COMPONENTS = [
  ToolbarComponent,
  NavigationComponent,
  BreadcrumbComponent,
  AppComponent,
  AppAfterLoginComponent,
  NotFoundPageComponent,
  SignInComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers:[
    UsersService
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule
    };
  }
}
