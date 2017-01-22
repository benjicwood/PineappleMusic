import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    myHell: []
};

export default function myHell (state, action) {
    state = state || initState;
    switch (action.type) {

        case types.FETCH_MY_HELL_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });
        case types.FETCH_MY_HELL_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                myHell: action.data
            });
        case types.FETCH_MY_HELL_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
            return state;
    }
}