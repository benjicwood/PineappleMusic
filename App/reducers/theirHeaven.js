import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    theirHeaven: []
};

export default function theirHeaven (state, action) {
    state = state || initState;
    switch (action.type) {
        case types.FETCH_THEIR_HEAVEN_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });
        case types.FETCH_THEIR_HEAVEN_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                theirHeaven: action.data
            });
        case types.FETCH_THEIR_HEAVEN_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
        return state;
    }
};
