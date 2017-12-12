import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';
import { State } from '../../reducers';

export const SEARCH = '[NavigationItems] Search';
export const SEARCH_SUCCESS = '[NavigationItems] Search Success';
export const SEARCH_FAILED = '[NavigationItems] Search Failed';

export class Search implements Action {
    readonly type = SEARCH;
    constructor() {}
}

export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;
    constructor(public payload: any) {}
}

export class SearchFailed implements Action {
    readonly type = SEARCH_FAILED;
    constructor(public payload: any) {}
}

export type Actions = RouterAction<State> | Search | SearchSuccess | SearchFailed;
