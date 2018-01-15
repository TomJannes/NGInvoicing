import { Action } from '@ngrx/store';
import { State } from '../reducers/invoice-detail';

export const GET = '[Invoice Detail] Search';
export const RESET = '[Invoice Detail] Reset';
export const GET_SUCCESS = '[Invoice Detail] Search Success';
export const GET_FAILED = '[Invoice Detail] Search Failed';

export const RECALCULATE_TOTALS = '[Invoice Detail] Recalculate Totals';
export const SAVE = '[Invoice Detail] Save';
export const SAVE_SUCCESS = '[Invoice Detail] Save Success';
export const SAVE_FAILED = '[Invoice Detail] Save Failed';


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
    readonly type = RECALCULATE_TOTALS;
    constructor(public payload: any) {}
}

export class Save implements Action {
    readonly type = SAVE;
    constructor(public payload: any) {}
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
