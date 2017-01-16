/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import SignupMusician from './views/signupMusician/index';
import SignUpView from './views/signup/index';
import InitialScreen from './views/splash/index';

export default class PineappleFront extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SignUpView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('PineappleFront', () => PineappleFront)
