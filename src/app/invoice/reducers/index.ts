import { createFeatureSelector, createSelector, StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromInvoice from './invoice';
import * as fromLayout from './layout';
import * as fromDetail from './invoice-detail';
import * as fromRoot from '../../reducers';


export interface InvoiceState {
  'overview': fromInvoice.State;
  'layout': fromLayout.State;
  'detail': fromDetail.State;
}

export interface State extends fromRoot.State {
  'invoice': InvoiceState;
}

export const reducers: ActionReducerMap<any> = {
  overview: fromInvoice.reducer,
  layout: fromLayout.reducer,
  detail: fromDetail.reducer
};

export const getInvoiceState = createFeatureSelector<InvoiceState>('invoice');
export const getInvoiceEntitiesState = createSelector(getInvoiceState, state => state.overview);
export const getInvoices = createSelector(getInvoiceEntitiesState, fromInvoice.getInvoices);
export const getInvoiceParameters = createSelector(getInvoiceEntitiesState, fromInvoice.getInvoiceParameters);
export const getInvoiceIsLoading = createSelector(getInvoiceEntitiesState, fromInvoice.getIsLoading);
export const getIsInvoiceLoadSuccess = createSelector(getInvoiceEntitiesState, fromInvoice.getIsLoadSuccess);

export const getLayoutState = createSelector(getInvoiceState, state => state.layout);
export const getFilterLayout = createSelector(getLayoutState, fromLayout.getFilterLayout);

// export const getTypeState = createSelector(getInvoiceState, state => state.types);
// export const getInvoiceTypes = createSelector(getTypeState, fromTypes.getInvoiceTypes);

export const getDetailState = createSelector(getInvoiceState, state => state.detail);
export const getSelectedInvoice = createSelector(getDetailState, fromDetail.getInvoice);
export const getIsInvoiceDetailLoadsuccess = createSelector(getDetailState, fromDetail.getIsLoadSuccess);
