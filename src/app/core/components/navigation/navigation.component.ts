import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as fromCore from '../../../reducers';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { NavigationItem } from '../../models/navigation-item';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavigationComponent {
  openedSubMenu = null;
  showSideNav$: Observable<boolean>;
  navigationItems$: Observable<NavigationItem[]>;

  constructor(private store: Store<fromCore.State>) {
    this.showSideNav$ = this.store.select(fromCore.getShowSidenav);
    this.navigationItems$ = this.store.select(fromCore.getNavigationItems);
  }

  openSubItems(item) {
    this.openedSubMenu = item.id;
  }

  navigateTo(item) {
    this.openedSubMenu = item.id;
  }
}
