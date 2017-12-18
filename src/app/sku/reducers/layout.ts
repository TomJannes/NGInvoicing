import * as layout from '../actions/layout';

export interface State {
    isOpen: boolean;
}

const initialState: State = {
    isOpen: false
};

export function reducer(state = initialState, action: layout.Actions): State {
    switch (action.type) {
        case layout.OPEN_FILTER:
            return {
                isOpen: true
            };
        case layout.CLOSE_FILTER:
            return {
                isOpen: false
            };
        case layout.TOGGLE_FILTER:
            return {
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}

export const getFilterLayout = (state: State) => {
    return state.isOpen;
};
