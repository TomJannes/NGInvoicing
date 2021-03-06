import * as customer from '../actions/customer-detail';
import { Customer } from '../model/customer';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    selectedId: string;
    customer: Customer;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    selectedId: null,
    customer: { _id: null, contacts: [] }
};

export function reducer(state = initialState, action: customer.Actions): State {
    switch (action.type) {
        case customer.SAVE_SUCCESS:
        case customer.RESET:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case customer.GET:
            return {
                ...state,
                selectedId: action.id,
                isLoading: true,
                isLoadSuccess: false
            };
        case customer.FORM_UPDATE:
        case customer.GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                customer: action.payload.data
            };
        case customer.SAVE_FAILED:
        case customer.GET_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                selectedId: null,
                customer: initialState.customer,
            };
        default:
            return state;
    }
}

export const getCustomer = (state: State) => state.customer;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
