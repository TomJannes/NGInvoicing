import { Action } from '@ngrx/store';
import { InvoiceSearchParams } from '../model/params/invoice-search-params';

export const SEARCH = '[Invoices] Search';
export const UPDATE_SEARCH_PARAMS = '[Invoices] Update search parameters';
export const RESET_SEARCH_PARAMS = '[Invoices] Reset search parameters';
export const SEARCH_SUCCESS = '[Invoices] Search Success';
export const SEARCH_FAILED = '[Invoices] Search Failed';

export class Search implements Action {
    readonly type = SEARCH;
    constructor() {}
}

export class UpdateSearchParameters implements Action {
    readonly type = UPDATE_SEARCH_PARAMS;
    constructor(public payload: InvoiceSearchParams) {}
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
