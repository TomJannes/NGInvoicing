import { Action } from '@ngrx/store';
import { State } from '../reducers/sku-detail';

export const GET = '[Sku Detail] Search';
export const RESET = '[Sku Detail] Reset';
export const GET_SUCCESS = '[Sku Detail] Search Success';
export const GET_FAILED = '[Sku Detail] Search Failed';

export const FORM_UPDATE = '[Sku Detail] Form Update';
export const SAVE = '[Sku Detail] Save';
export const SAVE_SUCCESS = '[Sku Detail] Save Success';
export const SAVE_FAILED = '[Sku Detail] Save Failed';


export class Get implements Action {
    readonly type = GET;
    constructor(public id: string) {}
}

export class Reset implements Action {
    readonly type = RESET;
    constructor() {}
}

export class GetSuccess implements Action {
    readonly type = GET_SUCCESS;
    constructor(public payload: any) {}
}

export class GetFailed implements Action {
    readonly type = GET_FAILED;
    constructor(public payload: any) {}
}

export class FormUpdate implements Action {
    readonly type = FORM_UPDATE;
    constructor(public payload: any) {}
}

export class Save implements Action {
    readonly type = SAVE;
    constructor() {}
}

export class SaveSuccess implements Action {
    readonly type = SAVE_SUCCESS;
    constructor(public payload: any) {}
}

export class SaveFailed implements Action {
    readonly type = SAVE_FAILED;
    constructor(public payload: any) {}
}

export type Actions = Reset | Get | GetSuccess | GetFailed | FormUpdate | Save | SaveSuccess | SaveFailed;
