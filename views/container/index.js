import React, { Component } from 'react';
import {
   StyleSheet,
   Navigator
 } from 'react-native';

import SignupMusician from '../signupMusician/index';
import SignupBand from '../signupBand/index';
import InitialScreen from '../splash/index';
import Matches from '../matches/index';
import Profile from '../profile/index';

export default class PineappleFront extends Component {
  render () {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          id: 'InitialScreen'
        }}
        renderScene={
  this.navigatorRenderScene
  }
  />
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
        return (<Profile navigator={navigator} title='ILike' />);
      case 'LikesMe':
        return (<Profile navigator={navigator} title='LikesMe' />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
