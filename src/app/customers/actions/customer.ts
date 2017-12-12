import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';
import { State } from '../reducers/customer';
import { CustomerSearchParams } from '../model/params/customer-search-params';

export const SEARCH = '[Customers] Search';
export const UPDATE_SEARCH_PARAMS = '[Customers] Update search parameters';
export const SEARCH_SUCCESS = '[Customers] Search Success';
export const SEARCH_FAILED = '[Customers] Search Failed';

export class Search implements Action {
    readonly type = SEARCH;
    constructor() {}
}

export class UpdateSearchParameters implements Action {
    readonly type = UPDATE_SEARCH_PARAMS;
    constructor(public payload: CustomerSearchParams) {}
}

export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;
    constructor(public payload: any) {}
}

export class SearchFailed implements Action {
    readonly type = SEARCH_FAILED;
    constructor(public payload: any) {}
}

export type Actions = RouterAction<State> | Search | SearchSuccess | SearchFailed | UpdateSearchParameters;
