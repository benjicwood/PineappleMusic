import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    connection: {}
};

export default function connection (state, action) {
    state = state || initState;
    switch (action.type) {
        case types.CREATE_CONNECTION_REQ:
            return Object.assign({}, state, {
                isLoading: true
            });
        case types.CREATE_CONNECTION_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                connection: action.data
            });
        case types.CREATE_CONNECTION_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        default:
            return state;
    }
}
