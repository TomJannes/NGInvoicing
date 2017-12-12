// import * as fromNavigation from './navigation';
// import * as fromNavigationItem from './navigation-item';
// import * as fromRouter from '@ngrx/router-store';
// import { RouterStateUrl } from '../../shared/utils';
// import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
// /**
//  * As mentioned, we treat each reducer like a table in a database. This means
//  * our top level state interface is just a map of keys to inner state types.
//  */
// export interface CoreState {
//   navigation: fromNavigation.NavigationState;
//   navigationItem: fromNavigationItem.NavigationItemState;
//   routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
// }

// /**
//  * Our state is composed of a map of action reducer functions.
//  * These reducer functions are called with each dispatched action
//  * and the current or initial state and return a new immutable state.
//  */
// export const coreReducers: ActionReducerMap<CoreState> = {
//   navigation: fromNavigation.reducer,
//   navigationItem: fromNavigationItem.reducer,
//   routerReducer: fromRouter.routerReducer
// };

// /**
//  * Navigation Reducers
//  */
// export const getNavigationState = createFeatureSelector<fromNavigation.NavigationState>('navigation');
// export const getShowSidenav = createSelector(
//   getNavigationState,
//   fromNavigation.getShowSidenav
// );

// export const getNavigationItemState = createFeatureSelector<fromNavigationItem.NavigationItemState>('navigationItem');
// export const getNavigationItems = createSelector(
//   getNavigationItemState,
//   fromNavigationItem.getNavigationItems
// );
