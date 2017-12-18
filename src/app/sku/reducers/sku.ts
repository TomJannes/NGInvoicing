import * as sku from '../actions/sku';
import { Sku } from '../model/sku';
import { SkuSearchResult } from '../model/results/sku-search-result';
import { SkuSearchParams } from '../model/params/sku-search-params';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    skuResult: SkuSearchResult;
    parameters: SkuSearchParams;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    skuResult: { skus: [], paging: { totalItemCount: 0 } },
    parameters: { pagination: { itemsPerPage: 10, currentPage: 1 }, sorting: { field: 'id', order: 'asc' } }
};

export function reducer(state = initialState, action: sku.Actions): State {
    switch (action.type) {
        case sku.RESET_SEARCH_PARAMS:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case sku.UPDATE_SEARCH_PARAMS:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false,
                parameters: action.payload
            };
        case sku.SEARCH:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case sku.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                skuResult: action.payload.data
            };
        case sku.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                skuResult: initialState.skuResult,
                parameters: initialState.parameters
            };
        default:
            return state;
    }
}

export const getSkus = (state: State) => state.skuResult;
export const getSkuParameters = (state: State) => state.parameters;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
