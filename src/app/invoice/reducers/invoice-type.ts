// import { InvoiceType } from './../model/invoice-type';
// import * as invoiceType from '../actions/invoice-type';
// import { InvoiceTypeSearchResult } from '../model/results/invoice-type-search-result';

// export interface State {
//     isLoading: boolean;
//     isLoadSuccess: boolean;
//     invoiceTypesResult: InvoiceTypeSearchResult;
// }

// const initialState: State = {
//     isLoading: false,
//     isLoadSuccess: false,
//     invoiceTypesResult: { invoiceTypes: [], paging: { totalItemCount: 0 } }
// };

// export function reducer(state = initialState, action: invoiceType.Actions): State {
//     switch (action.type) {
//         case invoiceType.SEARCH:
//             return {
//                 ...state,
//                 isLoading: true,
//                 isLoadSuccess: false
//             };
//         case invoiceType.SEARCH_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isLoadSuccess: true,
//                 invoiceTypesResult: action.payload.data
//             };
//         case invoiceType.SEARCH_FAILED:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isLoadSuccess: false,
//                 invoiceTypesResult: initialState.invoiceTypesResult
//             };
//         default:
//             return state;
//     }
// }

// export const getInvoiceTypes = (state: State) => state.invoiceTypesResult;
// export const getIsLoading = (state: State) => state.isLoading;
// export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
