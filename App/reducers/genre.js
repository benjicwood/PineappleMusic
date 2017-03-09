import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    genres: [{name:'blah'}]
};

export default function genre (state, action) {
    state = state || initState;
    switch (action.type) {
        case types.FETCH_GENRES_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });
        case types.FETCH_GENRES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                genres: action.data
            });
        case types.FETCH_GENRES_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
            return state;
    }
}

