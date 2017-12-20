import * as sku from '../actions/sku-detail';
import { Sku } from '../model/sku';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    selectedId: number;
    sku: Sku;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    selectedId: 0,
    sku: { id: 0 }
};

export function reducer(state = initialState, action: sku.Actions): State {
    switch (action.type) {
        case sku.RESET:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case sku.GET:
            return {
                ...state,
                selectedId: action.id,
                isLoading: true,
                isLoadSuccess: false
            };
        case sku.SAVE_SUCCESS:
        case sku.FORM_UPDATE:
        case sku.GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                sku: action.payload.data
            };
        case sku.SAVE_FAILED:
        case sku.GET_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                selectedId: 0,
                sku: initialState.sku,
            };
        default:
            return state;
    }
}

export const getSku = (state: State) => state.sku;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
