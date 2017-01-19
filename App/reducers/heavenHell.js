import * as types from '../actions/types';

const initState = {
  isLoading: false,
  error: '',
  connection: {}
};

export default function heavenHell (state, action) {
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
    case types.CREATE_DO_NOT_DISPLAY_REQ:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.CREATE_DO_NOT_DISPLAY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        doNotDisplay: action.data
      });
    case types.CREATE_DO_NOT_DISPLAY_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}
