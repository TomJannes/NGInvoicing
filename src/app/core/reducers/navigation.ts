import * as navigation from '../actions/navigation';

export interface NavigationState {
  showSidenav: boolean;
}

const initialState: NavigationState = {
  showSidenav: true,
};

export function reducer(state = initialState, action: navigation.Actions): NavigationState {
  switch (action.type) {
    case navigation.CLOSE_SIDENAV:
      return {
        showSidenav: false,
      };

    case navigation.OPEN_SIDENAV:
      return {
        showSidenav: true,
      };

    case navigation.TOGGLE_SIDENAV:
      return {
        showSidenav: !state.showSidenav,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: NavigationState) => {
  return state.showSidenav;
};
