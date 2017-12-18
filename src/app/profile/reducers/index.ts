import { createFeatureSelector, createSelector, StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromProfile from './profile';
import * as fromRoot from '../../reducers';


export interface ProfileState {
  'detail': fromProfile.State;
}

export interface State extends fromRoot.State {
  'profile': ProfileState;
}

export const reducers: ActionReducerMap<any> = {
  detail: fromProfile.reducer
};

export const getProfileState = createFeatureSelector<ProfileState>('profile');
export const getProfileEntitiesState = createSelector(getProfileState, state => state.detail);
export const getProfile = createSelector(getProfileEntitiesState, state => state.profile);
export const getProfileIsLoading = createSelector(getProfileEntitiesState, fromProfile.getIsLoading);
export const getIsProfileLoadSuccess = createSelector(getProfileEntitiesState, fromProfile.getIsLoadSuccess);
