import { combineReducers } from 'redux';
import connection from './connection';
import profile from './profile';
import genre from './genre';
import instrument from './instrument';
import matches from './matches';
import myHeaven from './myHeaven';
import myHell from './myHell';
import theirHeaven from './theirHeaven';


const mainReducer = combineReducers({
  profile, connection, genre, instrument, matches, myHeaven, myHell, theirHeaven
});

export default mainReducer;
