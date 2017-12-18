import * as navigationItem from '../actions/navigation-item';
import { NavigationItem } from '../models/navigation-item';

export interface NavigationItemState {
  isLoading: boolean;
  isLoadSuccess: boolean;
  items: NavigationItem[];
}

const initialState: NavigationItemState = {
  isLoading: false,
  isLoadSuccess: false,
  // TODO: implement server loading with effect
  items: [
    { id: 1, title: 'Dashboard', url: '/dashboard' },
    { id: 2, title: 'Customers', subItems: [
      { id: 3, title: 'Overview', url: '/customers/overview' },
      { id: 4, title: 'Create', url: '/customers/create' }
    ] },
    { id: 5, title: 'Skus', url: '/skus', subItems: [
      { id: 6, title: 'Overview', url: '/skus/overview' },
      { id: 7, title: 'Create', url: '/skus/create' }
    ] },
    { id: 8, title: 'Profile', url: '/profile' },
  ]
};

export function reducer(state = initialState, action: navigationItem.Actions): NavigationItemState {
  switch (action.type) {
    case navigationItem.SEARCH:
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false
      };
    case navigationItem.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: true,
      };
    case navigationItem.SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: false,
      };

    // TODO: implement server loading with effect
    default:
      return state;
  }
}

export const getNavigationItems = (state: NavigationItemState) => state.items;
export const getIsLoading = (state: NavigationItemState) => state.isLoading;
export const getIsLoadSuccess = (state: NavigationItemState) => state.isLoadSuccess;
