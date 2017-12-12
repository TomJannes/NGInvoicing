import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';


export const SEARCH = '[Customer Type] Search';
export const SEARCH_SUCCESS = '[Customer Type] Search Success';
export const SEARCH_FAILED = '[Customer Type] Search Failed';

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
