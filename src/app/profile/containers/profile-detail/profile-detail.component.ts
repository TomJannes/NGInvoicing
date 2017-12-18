import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../../model/profile';
import * as fromProfile from '../../reducers';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../../actions/profile';
import * as RouterActions from '../../../shared/router/router.actions';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProfileDetailComponent {
  selectedProfile$: Observable<Profile>;

  constructor(private store: Store<fromProfile.State>) {
    this.selectedProfile$ = this.store.select(fromProfile.getProfile).take(1);
  }

  save() {
    this.store.dispatch(new ProfileActions.Save());
  }

  cancel() {
    this.store.dispatch(new RouterActions.Go({ path: ['/dashboard'] }));
  }
}
