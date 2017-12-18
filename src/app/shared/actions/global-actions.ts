import { Action } from '@ngrx/store';

export const SHOW_SNACKBAR = '[Global] Show Snackbar';

export class ShowSnackbar implements Action {
    readonly type = SHOW_SNACKBAR;
    constructor(public payload: any) {}
}

export type Actions = ShowSnackbar;
