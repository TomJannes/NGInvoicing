import * as invoiceState from '../actions/invoice-state';
import { InvoiceStateSearchResult } from '../model/results/invoice-state-search-result';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    invoiceStateResult: InvoiceStateSearchResult;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    invoiceStateResult: { invoiceStates: null, paging: { totalItemCount: 0 } }
};

export function reducer(state = initialState, action: invoiceState.Actions): State {
    switch (action.type) {
        case invoiceState.SEARCH:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case invoiceState.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                invoiceStateResult: action.payload.data
            };
        case invoiceState.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                invoiceStateResult: initialState.invoiceStateResult
            };
        default:
            return state;
    }
}

export const getInvoiceStates = (state: State) => state.invoiceStateResult;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
