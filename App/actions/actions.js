import axios from 'axios';
import * as types from './types';

const actions = {};

const api = 'http://pineapple-api.herokuapp.com/api/';

actions.createProfile = function (profileType, newProfile) {
    return function (dispatch) {
        dispatch(actions.createProfileReq());
        axios.post(api+profileType+'/profile', newProfile)
            .then(function(response){
                dispatch(actions.createProfileSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(actions.createProfileError(error));
            });
    }
};

actions.createProfileReq = function () {
    return {
        type: types.CREATE_PROFILE_REQ,
    };
};

actions.createProfileSuccess = function (data) {
    return {
        type: types.CREATE_PROFILE_SUCCESS,
        data: data
    };
};

actions.createProfileError = function (error) {
    return {
        type: types.CREATE_PROFILE_ERROR,
        error: error
    };
};

actions.updateProfile = function (profileType, id, updatedProfile) {
    return function (dispatch) {
        dispatch(actions.updateProfileReq());
        axios.post(api+profileType+'/profile/'+id, updatedProfile)
            .then(function(response){
                dispatch(actions.createProfileSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(actions.createProfileError(error));
            });
    }
};

actions.updateProfileReq = function () {
    return {
        type: types.UPDATE_PROFILE_REQ,
    };
};

actions.updateProfileSuccess = function (data) {
    return {
        type: types.UPDATE_PROFILE_SUCCESS,
        data: data
    };
};

actions.updateProfileError = function (error) {
    return {
        type: types.UPDATE_PROFILE_ERROR,
        error: error
    };
};

actions.fetchBandProfile = function (id) {
    return function (dispatch) {
        dispatch(actions.fetchBandProfileReq());
        axios.get(api+'profile/band'+id)
            .then(function (response) {
                actions.fetchBandProfileSuccess(response.data)
            })
            .catch(function (error) {
                actions.fetchBandProfileError(error)
            });
    }
};

actions.fetchBandProfileReq = function () {
    return {
        type: types.FETCH_BAND_PROFILE_REQ
    }
};

actions.fetchBandProfileSuccess = function (data) {
    return {
        type: types.FETCH_BAND_PROFILE_SUCCESS,
        data: data
    }
};

actions.fetchBandProfileError = function (error) {
    return {
        type: types.FETCH_BAND_PROFILE_ERROR,
        error: error
    }
};

actions.fetchMusicianProfile = function (id) {
    return function (dispatch) {
        dispatch(actions.fetchMusicianProfileReq());
        axios.get(api+'profile/musician'+id)
            .then(function (response) {
                actions.fetchMusicianProfileSuccess(response.data)
            })
            .catch(function (error) {
                actions.fetchMusicianProfileError(error)
            });
    }
};

actions.fetchMusicianProfileReq = function () {
    return {
        type: types.FETCH_MUSICIAN_PROFILE_REQ
    }
};

actions.fetchMusicianProfileSuccess = function (data) {
    return {
        type: types.FETCH_MUSICIAN_PROFILE_SUCCESS,
        data: data
    }
};

actions.fetchMusicianProfileError = function (error) {
    return {
        type: types.FETCH_MUSICIAN_PROFILE_ERROR,
        error: error
    }
};

export default actions;
