import { Action } from '@ngrx/store';

export const RESET = '[Profile] Reset';
export const GET = '[Profile] Search';
export const GET_SUCCESS = '[Profile] Search Success';
export const GET_FAILED = '[Profile] Search Failed';

export const FORM_UPDATE = '[Profile] Form Update';
export const SAVE = '[Profile] Save';
export const SAVE_SUCCESS = '[Profile] Save Success';
export const SAVE_FAILED = '[Profile] Save Failed';

export class Reset implements Action {
    readonly type = RESET;
    constructor() {}
}

export class Get implements Action {
    readonly type = GET;
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
