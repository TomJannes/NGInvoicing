import * as invoice from '../actions/invoice';
import { Invoice } from '../model/invoice';
import { InvoiceSearchResult } from '../model/results/invoice-search-result';
import { InvoiceSearchParams } from '../model/params/invoice-search-params';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    invoiceResult: InvoiceSearchResult;
    parameters: InvoiceSearchParams;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    invoiceResult: { invoices: [], paging: { totalItemCount: 0 } },
    parameters: { pagination: { itemsPerPage: 10, currentPage: 1 }, sorting: { field: 'number', order: 'desc' } }
};

export function reducer(state = initialState, action: invoice.Actions): State {
    switch (action.type) {
        case invoice.RESET_SEARCH_PARAMS:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case invoice.UPDATE_SEARCH_PARAMS:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false,
                parameters: action.payload
            };
        case invoice.SEARCH:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case invoice.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                invoiceResult: action.payload.data
            };
        case invoice.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                invoiceResult: initialState.invoiceResult,
                parameters: initialState.parameters
            };
        default:
            return state;
    }
}

export const getInvoices = (state: State) => state.invoiceResult;
export const getInvoiceParameters = (state: State) => state.parameters;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
