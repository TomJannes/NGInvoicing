import { Component, ViewEncapsulation } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromCore from '../../../reducers';
import * as navigation from '../../actions/navigation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ToolbarComponent {

  constructor(private store: Store<fromCore.State>) {
  }

  toggle() {
    this.store.dispatch(new navigation.ToggleSideNav());
  }
}
