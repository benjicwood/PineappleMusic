import React, { Component } from 'react';
import {
   StyleSheet,
   Navigator
 } from 'react-native';

import SignupMusician from '../signupMusician/index';
import SignupView from '../signup/index';
import InitialScreen from '../splash/index';

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
      case 'SignupView':
        return (<SignupView navigator={navigator} title='SignupView' />);
      case 'SignupMusician':
        return (<SignupMusician navigator={navigator} title='SignupMusician' />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
