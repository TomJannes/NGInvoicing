import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule
   } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule],
  // tslint:disable-next-line:max-line-length
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule],
})
export class MaterialModule { }
