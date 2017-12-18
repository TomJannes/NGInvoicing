import { Action } from '@ngrx/store';

export const TOGGLE_FILTER = '[Skus Layout] Toggle filter view';
export const OPEN_FILTER = '[Skus Layout] Open filter';
export const CLOSE_FILTER = '[Skus Layout] Close filter';

export class ToggleFilterVisibility implements Action {
    readonly type = TOGGLE_FILTER;
    constructor() {}
}

export class OpenFilter implements Action {
    readonly type = OPEN_FILTER;
    constructor() {}
}

export class CloseFilter implements Action {
    readonly type = CLOSE_FILTER;
    constructor() {}
}


export type Actions = ToggleFilterVisibility | OpenFilter | CloseFilter;
