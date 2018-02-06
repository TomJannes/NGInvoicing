import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions } from '@ngrx/effects';
import * as Act from '../../../shared/actions/global-actions';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-after-login',
  templateUrl: './app-after-login.component.html',
  styleUrls: ['./app-after-login.component.css']
})
export class AppAfterLoginComponent implements OnDestroy {
  showSnackbar: Subscription;
  constructor(private actions$: Actions, public snackBar: MatSnackBar) {
    this.showSnackbar = this.actions$.ofType<Act.ShowSnackbar>(Act.SHOW_SNACKBAR)
      .map((data) => {
        return data.payload;
      })
      .do((message) => {
        snackBar.open(message, null, { duration: 5000 });
      }).subscribe();
  }

  ngOnDestroy(): void {
    this.showSnackbar.unsubscribe();
  }
}
