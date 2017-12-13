import { createFeatureSelector, createSelector, StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromCustomer from './customer';
import * as fromLayout from './layout';
import * as fromTypes from './customer-type';
import * as fromDetail from './customer-detail';
import * as fromRoot from '../../reducers';


export interface CustomerState {
  'overview': fromCustomer.State;
  'layout': fromLayout.State;
  'types': fromTypes.State;
  'detail': fromDetail.State;
}

export interface State extends fromRoot.State {
  'customer': CustomerState;
}

export const reducers: ActionReducerMap<any> = {
  overview: fromCustomer.reducer,
  layout: fromLayout.reducer,
  types: fromTypes.reducer,
  detail: fromDetail.reducer
};

export const getCustomerState = createFeatureSelector<CustomerState>('customer');
export const getCustomerEntitiesState = createSelector(getCustomerState, state => state.overview);
export const getCustomers = createSelector(getCustomerEntitiesState, fromCustomer.getCustomers);
export const getCustomerParameters = createSelector(getCustomerEntitiesState, fromCustomer.getCustomerParameters);
export const getCustomerIsLoading = createSelector(getCustomerEntitiesState, fromCustomer.getIsLoading);
export const getIsCustomerLoadSuccess = createSelector(getCustomerEntitiesState, fromCustomer.getIsLoadSuccess);

export const getLayoutState = createSelector(getCustomerState, state => state.layout);
export const getFilterLayout = createSelector(getLayoutState, fromLayout.getFilterLayout);

export const getTypeState = createSelector(getCustomerState, state => state.types);
export const getCustomerTypes = createSelector(getTypeState, fromTypes.getCustomerTypes);

export const getDetailState = createSelector(getCustomerState, state => state.detail);
export const getSelectedCustomer = createSelector(getDetailState, fromDetail.getCustomer);
