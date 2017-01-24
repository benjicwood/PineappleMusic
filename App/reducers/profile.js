import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: '',
  userProfile: {"type":"musician","instrument":"5877c4893aecdd49742d833b", "genre":"5877c48b3aecdd49742d8359"},
  profile: {}
};

export default function profile (state, action) {
  state = state || initState;

  switch (action.type) {

    case types.CREATE_PROFILE_LOCAL_STORAGE_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });

    case types.CREATE_PROFILE_LOCAL_STORAGE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        userProfile: action.profile
      });

    case types.CREATE_PROFILE_LOCAL_STORAGE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });

    case types.CREATE_PROFILE_REQ:
      return Object.assign({}, state, {
        isLoading: true
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
        isLoading: true
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
    case types.FETCH_PROFILE_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        profile: action.data
      });
    case types.FETCH_PROFILE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });

    default:
      return state;
  }
}
