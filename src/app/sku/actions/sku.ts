import { Action } from '@ngrx/store';
import { SkuSearchParams } from '../model/params/sku-search-params';

export const SEARCH = '[Skus] Search';
export const UPDATE_SEARCH_PARAMS = '[Skus] Update search parameters';
export const RESET_SEARCH_PARAMS = '[Skus] Reset search parameters';
export const SEARCH_SUCCESS = '[Skus] Search Success';
export const SEARCH_FAILED = '[Skus] Search Failed';

export class Search implements Action {
    readonly type = SEARCH;
    constructor() {}
}

export class UpdateSearchParameters implements Action {
    readonly type = UPDATE_SEARCH_PARAMS;
    constructor(public payload: SkuSearchParams) {}
}

export class Reset implements Action {
    readonly type = RESET_SEARCH_PARAMS;
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

export type Actions = Search | SearchSuccess | SearchFailed | UpdateSearchParameters | Reset;
