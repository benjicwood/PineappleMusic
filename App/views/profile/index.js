import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Camera from './camera';

const backIcon = require('../signupBand/back.png');

export default class Profile extends Component {

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onMatchPress.bind(this)}
        >
        <Image
          source={backIcon}
          style={styles.toMatches}
          resizeMode='contain'
        />
        </TouchableOpacity>
          <Camera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  toMatches: {
    paddingTop: 20,
    fontSize: 20
  },
  thisthing: {
    alignItems: 'center',
    width: 300,
    height: 200,
    borderWidth: 5,
    borderColor: 'black'
  }
});
