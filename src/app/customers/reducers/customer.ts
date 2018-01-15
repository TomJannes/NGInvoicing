import * as customer from '../actions/customer';
import { Customer } from '../model/customer';
import { CustomerSearchResult } from '../model/results/customer-search-result';
import { CustomerSearchParams } from '../model/params/customer-search-params';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    customerResult: CustomerSearchResult;
    parameters: CustomerSearchParams;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    customerResult: { customers: [], paging: { totalItemCount: 0 } },
    parameters: { pagination: { itemsPerPage: 10, currentPage: 1 }, sorting: { field: 'id', order: 'asc' } } //todo: change default sorting
};

export function reducer(state = initialState, action: customer.Actions): State {
    switch (action.type) {
        case customer.RESET_SEARCH_PARAMS:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case customer.UPDATE_SEARCH_PARAMS:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false,
                parameters: action.payload
            };
        case customer.SEARCH:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case customer.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                customerResult: action.payload.data
            };
        case customer.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                customerResult: initialState.customerResult,
                parameters: initialState.parameters
            };
        default:
            return state;
    }
}

export const getCustomers = (state: State) => state.customerResult;
export const getCustomerParameters = (state: State) => state.parameters;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
