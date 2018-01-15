import * as invoice from '../actions/invoice-detail';
import { Invoice } from '../model/invoice';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    selectedId: string;
    invoice: Invoice;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    selectedId: null,
    invoice: { _id: null, lines: [] },
};

function round(number) {
    return (Math.round(number * 100)/100).toFixed(2);
}

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
        case invoice.RECALCULATE_TOTALS: 
            let total = 0;
            let totalInc = 0;
            let totalVat = 0;
            for(let line of (<Invoice>action.payload.data).lines) {
                total += line.amount * line.price;
                totalInc += (line.amount * line.price) * (1 + (line.vat / 100));
                totalVat += (line.amount * line.price) * (line.vat / 100);
            }
            return {
                ...state,
                invoice: {
                    ...state.invoice,
                    ...action.payload.data,
                    total: total.toFixed(2),
                    totalInc: totalInc.toFixed(2),
                    totalVat: totalVat.toFixed(2)
                } 
            };
        case invoice.SAVE_SUCCESS:
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
                selectedId: null,
                invoice: initialState.invoice,
            };
        default:
            return state;
    }
}

export const getInvoice = (state: State) => state.invoice;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
