import React, { Component } from 'react';
import {
   StyleSheet,
   Navigator
 } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import mainReducer from '../../reducers/mainReducer';

import SignupMusician from '../signupMusician/index';
import SignupBand from '../signupBand/index';
import InitialScreen from '../splash/index';
import Matches from '../matches/index';
import Profile from '../profile/index';
import ILike from '../iLike/index';
import LikesMe from '../likesMe/index';

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(logger, thunk));

export default class PineappleFront extends Component {

// check for userprofile on local storage
  // if found - load it to state , set initialRoute id to Matches,
  // get matches, load matches view
  //
  // if not found set initialRoute id to 'splash' ,display splash,
  // choose band or musician type for new acct signup.

  render () {
    return (
      <Provider store={store}>
        <Navigator
            style={styles.container}
            initialRoute={{
              id: 'Matches'
            }}
            renderScene={this.navigatorRenderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        />
      </Provider>
    );
  }
  navigatorRenderScene (route, navigator) {
    switch (route.id) {
      case 'InitialScreen':
        return (<InitialScreen navigator={navigator} title='InitialScreen' />);
      case 'SignupBand':
        return (<SignupBand navigator={navigator} title='SignupBand' />);
      case 'SignupMusician':
        return (<SignupMusician navigator={navigator} title='SignupMusician' />);
      case 'Matches':
        return (<Matches navigator={navigator} title='Matches' />);
      case 'Profile':
        return (<Profile navigator={navigator} title='Profile' />);
      case 'ILike':
        return (<ILike navigator={navigator} title='ILike' />);
      case 'LikesMe':
        return (<LikesMe navigator={navigator} title='LikesMe' />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

