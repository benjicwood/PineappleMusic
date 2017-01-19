import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    userMatches: [],
};

export default function matches(state , action) {

    state = state || initState;

    switch (action.type) {

        case types.FETCH_MATCHES_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });

        case types.FETCH_MATCHES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                userMatches: action.data
            });

        case types.FETCH_MATCHES_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        default:
            return state;
    }
};
