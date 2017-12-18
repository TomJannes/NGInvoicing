import { createFeatureSelector, createSelector, StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromSku from './sku';
import * as fromLayout from './layout';
// import * as fromTypes from './customer-type';
// import * as fromDetail from './customer-detail';
import * as fromRoot from '../../reducers';


export interface SkuState {
  'overview': fromSku.State;
  'layout': fromLayout.State;
  // 'types': fromTypes.State;
  // 'detail': fromDetail.State;
}

export interface State extends fromRoot.State {
  'sku': SkuState;
}

export const reducers: ActionReducerMap<any> = {
  overview: fromSku.reducer,
  layout: fromLayout.reducer/*,
  types: fromTypes.reducer,
  detail: fromDetail.reducer*/
};

export const getSkuState = createFeatureSelector<SkuState>('sku');
export const getSkuEntitiesState = createSelector(getSkuState, state => state.overview);
export const getSkus = createSelector(getSkuEntitiesState, fromSku.getSkus);
export const getSkuParameters = createSelector(getSkuEntitiesState, fromSku.getSkuParameters);
export const getSkuIsLoading = createSelector(getSkuEntitiesState, fromSku.getIsLoading);
export const getIsSkuLoadSuccess = createSelector(getSkuEntitiesState, fromSku.getIsLoadSuccess);

export const getLayoutState = createSelector(getSkuState, state => state.layout);
export const getFilterLayout = createSelector(getLayoutState, fromLayout.getFilterLayout);

// export const getTypeState = createSelector(getCustomerState, state => state.types);
// export const getCustomerTypes = createSelector(getTypeState, fromTypes.getCustomerTypes);

// export const getDetailState = createSelector(getCustomerState, state => state.detail);
// export const getSelectedCustomer = createSelector(getDetailState, fromDetail.getCustomer);
// export const getIsCustomerDetailLoadsuccess = createSelector(getDetailState, fromDetail.getIsLoadSuccess);
