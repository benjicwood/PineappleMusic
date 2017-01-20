import { combineReducers } from 'redux';
import lists from './lists';
import profile from './profile';
import matches from './matches';
import heavenHell from './heavenHell';

const mainReducer = combineReducers({
  lists: lists,
  profile: profile,
  matches: matches,
  heavenHell: heavenHell
});

export default mainReducer;
