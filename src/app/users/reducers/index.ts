// import { createFeatureSelector, createSelector, StoreModule, ActionReducerMap } from '@ngrx/store';
// import * as fromUsers from './users';
// import * as fromRoot from '../../reducers';


// export interface UserState {
//   'security': fromUsers.State;
// }

// export interface State extends fromRoot.State {
//   'users': UserState;
// }

// export const reducers: ActionReducerMap<any> = {
//     security: fromUsers.reducer
// };

// export const getUsersState = createFeatureSelector<UserState>('users');
// export const getUsersEntitiesState = createSelector(getUsersState, state => state.security);
// export const getIsAuthenticated = createSelector(getUsersEntitiesState, fromUsers.isAuthenticated);
// export const getIsAuthenticatedLoaded = createSelector(getUsersEntitiesState, fromUsers.isAuthenticatedLoaded);
// export const getAuthenticatedUser = createSelector(getUsersEntitiesState, fromUsers.getAuthenticatedUser);
// export const getAuthenticationError = createSelector(getUsersEntitiesState, fromUsers.getAuthenticationError);
// export const getIsLoading = createSelector(getUsersEntitiesState, fromUsers.isLoading);
// export const getSignOutError = createSelector(getUsersEntitiesState, fromUsers.getSignOutError);
// export const getSignUpError= createSelector(getUsersEntitiesState, fromUsers.getSignUpError);
