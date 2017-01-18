import * as types from '../actions/types';

const initState = {
    isLoading: false,
    error: '',
    userProfile: {},
    bandProfile: {},
    musicianProfile: {}
};

export default function profile(state , action) {

    state = state || initState;

    switch (action.type) {

        case types.CREATE_PROFILE_REQ:
            return Object.assign({}, state, {
                isLoading: true,
            });

        case types.CREATE_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                userProfile: action.data
            });

        case types.CREATE_PROFILE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        case types.UPDATE_PROFILE_REQ:
            return Object.assign({}, state, {
                isLoading: true,
            });

        case types.UPDATE_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                userProfile: action.data
            });

        case types.UPDATE_PROFILE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        case types.FETCH_BAND_PROFILE_REQ:
            return Object.assign({}, state, {
                isLoading: true,
            });

        case types.FETCH_BAND_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                bandProfile: action.data
            });

        case types.FETCH_BAND_PROFILE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        case types.FETCH_MUSICIAN_PROFILE_REQ:
            return Object.assign({}, state, {
                isLoading: true,
            });

        case types.FETCH_MUSICIAN_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                musicianProfile: action.data
            });

        case types.FETCH_MUSICIAN_PROFILE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });

        default:
            return state;
    }
};
