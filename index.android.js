/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Navigator
 } from 'react-native';

import SignupMusician from './views/signupMusician/index';
import SignupView from './views/signup/index';
import InitialScreen from './views/splash/index';

export default class PineappleFront extends Component  {
  render () {
    return (
      <Navigator
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
    _navigator = navigator;
  switch(route.id) {
  case'InitialScreen':
  return (<InitialScreen navigator={navigator} title='InitialScreen'/>);
  case'SignupView':
  return(<SignupView navigator={navigator} title='SignupView'/>);
  case'SignupMusician':
  return(<SignupMusician navigator={navigator} title='SignupMusician'/>);
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('PineappleFront', () => PineappleFront);
