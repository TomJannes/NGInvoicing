import * as profile from '../actions/profile';
import { Profile } from '../model/profile';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    profile: Profile;
}

const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    profile: null
};

export function reducer(state = initialState, action: profile.Actions): State {
    switch (action.type) {
        case profile.RESET:
            return {
                ...initialState,
                isLoading: true,
                isLoadSuccess: false,
            };
        case profile.GET:
            return {
                ...state,
                isLoading: true,
                isLoadSuccess: false
            };
        case profile.SAVE_SUCCESS:
        case profile.FORM_UPDATE:
        case profile.GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                profile: action.payload.data
            };
        case profile.SAVE_FAILED:
        case profile.GET_FAILED:
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                profile: initialState.profile,
            };
        default:
            return state;
    }
}

export const getProfile = (state: State) => state.profile;
export const getIsLoading = (state: State) => state.isLoading;
export const getIsLoadSuccess = (state: State) => state.isLoadSuccess;
