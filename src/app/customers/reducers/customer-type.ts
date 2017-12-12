import { CustomerType } from './../model/customer-type';
import * as customerType from '../actions/customer-type';
import { CustomerTypeSearchResult } from '../model/results/customer-type-search-result';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    customerTypesResult: CustomerTypeSearchResult;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    customerTypesResult: { customerTypes: [], paging: { totalItemCount: 0 } }
};

export function reducer(state = initialState, action: customerType.Actions): State {
    switch (action.type) {
        case customerType.SEARCH:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case customerType.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                customerTypesResult: action.payload.data
            };
        case customerType.SEARCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                customerTypesResult: initialState.customerTypesResult
            };
        default:
            return state;
    }
}

export const getCustomerTypes = (state: State) => state.customerTypesResult;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
