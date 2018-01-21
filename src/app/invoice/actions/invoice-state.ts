import { Action } from '@ngrx/store';

export const SEARCH = '[Invoice State] Search';
export const SEARCH_SUCCESS = '[Invoice State] Search Success';
export const SEARCH_FAILED = '[Invoice State] Search Failed';

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

export type Actions = Search | SearchSuccess | SearchFailed;
