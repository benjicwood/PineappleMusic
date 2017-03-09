import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    instruments: []
};

export default function instrument (state, action) {
    state = state || initState;
    switch (action.type) {
        case types.FETCH_INSTRUMENTS_REQ:
        return Object.assign({}, state, {
            isLoading: true
        });
        case types.FETCH_INSTRUMENTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                instruments: action.data
            });
        case types.FETCH_INSTRUMENTS_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
            return state;
    }
}
