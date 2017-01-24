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
import {AsyncStorage} from 'react-native';

import SignupMusician from '../signupMusician/index';
import SignupBand from '../signupBand/index';
import UserTypeSelect from '../userTypeSelect/index';
import Matches from '../matches/index';
import Profile from '../profile/index';
import ILike from '../iLike/index';
import LikesMe from '../likesMe/index';
import Splash from '../splash/index';
import PlayList from '../profile/Playlist';

const logger = createLogger();
const store = createStore(mainReducer, applyMiddleware(logger, thunk));

export default class PineappleFront extends Component {

  componentDidMount() {

  }

  render () {
    return (
      <Provider store={store}>
        <Navigator
            style={styles.container}
            initialRoute={{
              id: 'Splash'
            }}
            renderScene={this.navigatorRenderScene}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid} />
      </Provider>
    );
  }
  navigatorRenderScene (route, navigator) {
    switch (route.id) {
      case 'UserTypeSelect':
        return (<UserTypeSelect navigator={navigator} title='UserTypeSelect' />);
      case 'Splash':
        return (<Splash navigator={navigator} title='Splash Screen' />);
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
      case 'PlayList':
        return (<PlayList navigator={navigator} title='PlayList' />);
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
