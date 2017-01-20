import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: '',
  genres: [],
  instruments: [],
  iLike: [],
  likesMe: []
};

export default function lists (state, action) {
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
    case types.FETCH_INSTRUMENTS_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.FETCH_INSTRUMENTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        instruments: action.data
      });
    case types.FETCH_INSTRUMENTS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.FETCH_I_LIKE_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.FETCH_I_LIKE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        iLike: action.data
      });
    case types.FETCH_I_LIKE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case types.FETCH_LIKES_ME_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.FETCH_LIKES_ME_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        iLike: action.data
      });
    case types.FETCH_LIKES_ME_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}
