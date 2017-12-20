import * as invoice from '../actions/invoice-detail';
import { Invoice } from '../model/invoice';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    selectedId: number;
    invoice: Invoice;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    selectedId: 0,
    invoice: { id: 0 }
};

export function reducer(state = initialState, action: invoice.Actions): State {
    switch (action.type) {
        case invoice.RESET:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case invoice.GET:
            return {
                ...state,
                selectedId: action.id,
                isLoading: true,
                isLoadSuccess: false
            };
        case invoice.SAVE_SUCCESS:
        case invoice.FORM_UPDATE:
        case invoice.GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                invoice: action.payload.data
            };
        case invoice.SAVE_FAILED:
        case invoice.GET_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                selectedId: 0,
                invoice: initialState.invoice,
            };
        default:
            return state;
    }
}

export const getInvoice = (state: State) => state.invoice;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
