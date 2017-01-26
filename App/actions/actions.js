import axios from 'axios';
import * as types from './types';

const actions = {};
const api = 'http://57ec0123.ngrok.io/api/';

actions.createProfileLocalStorage = function (profile) {
  return function (dispatch) {
    dispatch(actions.createProfileLocalStorageReq());
    dispatch(actions.createProfileLocalStorageSuccess(profile));
  }
};

actions.createProfileLocalStorageReq = function () {
  return {
    type: types.CREATE_PROFILE_LOCAL_STORAGE_REQ
  }
};

actions.createProfileLocalStorageSuccess = function (data) {
  return {
    type: types.CREATE_PROFILE_LOCAL_STORAGE_SUCCESS,
    profile: data
  }
};

actions.createProfileLocalStorageError = function (error) {
  return {
    type: types.CREATE_PROFILE_LOCAL_STORAGE_ERROR,
    error: error
  }
};

actions.createProfile = function (profileType, newProfile) {
  return function (dispatch) {
    dispatch(actions.createProfileReq());
    axios.post(api + 'profile/'+ profileType, newProfile)
        .then(function (response) {
          dispatch(actions.createProfileSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(actions.createProfileError(error));
        });
  };
};

actions.createProfileReq = function () {
  return {
    type: types.CREATE_PROFILE_REQ
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
    axios.post(api + 'profile/' + profileType + '/' + id, updatedProfile)
        .then(function (response) {
          dispatch(actions.createProfileSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(actions.createProfileError(error));
        });
  };
};

actions.updateProfileReq = function () {
  return {
    type: types.UPDATE_PROFILE_REQ
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

actions.fetchProfile = function (type, id) {
  return function (dispatch) {
    dispatch(actions.fetchProfileReq());
    axios.get(api + 'profile/'+ type + '/' + id)
        .then(function (response) {
          actions.fetchProfileSuccess(response.data);
        })
        .catch(function (error) {
          actions.fetchProfileError(error);
        });
  };
};

actions.fetchProfileReq = function () {
  return {
    type: types.FETCH_PROFILE_REQ
  }
};

actions.fetchProfileSuccess = function (data) {
  return {
    type: types.FETCH_PROFILE_SUCCESS,
    data: data
  }
};

actions.fetchProfileError = function (error) {
  return {
    type: types.FETCH_PROFILE_ERROR,
    error: error
  }
};

actions.fetchGenres = function () {
  return function (dispatch) {
    dispatch(actions.fetchGenresReq());
    axios.get(api+'genre/')

        .then(function (response) {
          dispatch(actions.fetchGenresSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(actions.fetchGenresError(error));
        });
  };
};

actions.fetchGenresReq = function () {
  return {
    type: types.FETCH_GENRES_REQ
  };
};

actions.fetchGenresSuccess = function (data) {
  return {
    type: types.FETCH_GENRES_SUCCESS,
    data: data
  };
};

actions.fetchGenresError = function (error) {
  return {
    type: types.FETCH_GENRES_ERROR,
    error: error
  };
};


actions.fetchInstruments = function () {
  return function (dispatch) {
    dispatch(actions.fetchInstrumentsReq());
    axios.get(api+'instrument/')
        .then(function (response) {
          dispatch(actions.fetchInstrumentsSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(actions.fetchInstrumentsError(error));
        });
  };
};

actions.fetchInstrumentsReq = function () {
  return {
    type: types.FETCH_INSTRUMENTS_REQ,
  }
};

actions.fetchInstrumentsSuccess = function (data) {
  return {
    type: types.FETCH_INSTRUMENTS_SUCCESS,
    data: data
  }
};

actions.fetchInstrumentsError = function (error) {
  return {
    type: types.FETCH_INSTRUMENTS_ERROR,
    error: error
  }
};


actions.fetchMyHeaven = function (id) {
  return function (dispatch) {
    dispatch(actions.fetchMyHeavenReq());
    axios.get(api+'ilike/'+id)
        .then(function (response) {
          dispatch(actions.fetchMyHeavenSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(actions.fetchMyHeavenError(error))
        });
  }
};

actions.fetchMyHeavenReq = function () {
  return {
    type: types.FETCH_MY_HEAVEN_REQ,
  };
};

actions.fetchMyHeavenSuccess = function (data) {
  return {
    type: types.FETCH_MY_HEAVEN_SUCCESS,
    data: data
  };
};

actions.fetchMyHeavenError = function (error) {
  return {
    type: types.FETCH_MY_HEAVEN_ERROR,
    error: error
  };
};

actions.fetchTheirHeaven = function (id) {
  return function (dispatch) {
    dispatch(actions.fetchTheirHeavenReq());
    axios.get(api+'likesme/'+id)
        .then(function (response) {
          dispatch(actions.fetchTheirHeavenSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(actions.fetchTheirHeavenError(error))
        });
  }
};

actions.fetchTheirHeavenReq = function () {
  return {
    type: types.FETCH_THEIR_HEAVEN_REQ,
  };
};

actions.fetchTheirHeavenSuccess = function (data) {
  return {
    type: types.FETCH_THEIR_HEAVEN_SUCCESS,
    data: data
  };
};

actions.fetchTheirHeavenError = function (error) {
  return {
    type: types.FETCH_THEIR_HEAVEN_ERROR,
    error: error
  };
};

actions.fetchMyHell = function (id) {
  return function (dispatch) {
    dispatch(actions.fetchMyHellReq());
    axios.get(api+'connection/hell/'+id)
        .then(function (response) {
          dispatch(actions.fetchMyHellSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(actions.fetchMyHellError(error))
        });
  }
};

actions.fetchMyHellReq = function () {
  return {
    type: types.FETCH_MY_HELL_REQ,
  };
};

actions.fetchMyHellSuccess = function (data) {
  return {
    type: types.FETCH_MY_HELL_SUCCESS,
    data: data
  };
};

actions.fetchMyHellError = function (error) {
  return {
    type: types.FETCH_MY_HELL_ERROR,
    error: error
  };
};

actions.fetchMatches = function (profile) {
  return function (dispatch) {
    dispatch(actions.fetchMatchesReq());
    axios.post(api+'matches', profile)
        .then(function (response) {
          dispatch(actions.fetchMatchesSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(actions.fetchMatchesError(error))
        });
  }
};

actions.fetchMatchesReq = function () {
  return {
    type: types.FETCH_MATCHES_REQ,
  };
};

actions.fetchMatchesSuccess = function (data) {
  return {
    type: types.FETCH_MATCHES_SUCCESS,
    data: data
  };
};

actions.fetchMatchesError = function (error) {
  return {
    type: types.FETCH_MATCHES_ERROR,
    error: error
  };
};

actions.createConnection = function (connection) {
  return function (dispatch) {
    dispatch(actions.createConnectionReq());
    axios.post(api+'connection', connection)
        .then(function (response) {
          dispatch(actions.createConnectionSuccess(response.data))
        })
        .catch(function (error) {
          dispatch(actions.createConnectionError(error))
        });
  }
};

actions.createConnectionReq = function () {
  return {
    type: types.CREATE_CONNECTION_REQ,
  };
};

actions.createConnectionSuccess = function (data) {
  return {
    type: types.CREATE_CONNECTION_SUCCESS,
    data: data
  };
};

actions.createConnectionError = function (error) {
  return {
    type: types.CREATE_CONNECTION_ERROR,
    error: error
  };
};

export default actions;
