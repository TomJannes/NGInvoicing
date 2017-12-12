import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = '[Navigation] Open Sidenav';
export const CLOSE_SIDENAV = '[Navigation] Close Sidenav';
export const TOGGLE_SIDENAV = '[Navigation] Toggle Sidenav';

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class ToggleSideNav implements Action {
  readonly type = TOGGLE_SIDENAV;
}

export type Actions = OpenSidenav | CloseSidenav | ToggleSideNav;
