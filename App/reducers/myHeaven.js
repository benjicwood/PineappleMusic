import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    list: [],
};

export default function myHeaven (state, action) {
    state = state || initState;
    switch (action.type) {
        case types.FETCH_MY_HEAVEN_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });
        case types.FETCH_MY_HEAVEN_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                list: action.data
            });
        case types.FETCH_MY_HEAVEN_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
            return state;
    }
};




