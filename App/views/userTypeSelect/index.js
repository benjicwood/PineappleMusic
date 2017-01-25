import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

const background = require('./pineapplemusicmatching.png');

export default class UserTypeSelect extends Component {

  onBandPress () {
    this.props.navigator.push({
      id: 'SignupBand'
    });
  }

  OnMusicianPress () {
    this.props.navigator.push({
      id: 'SignupMusician'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
        />
        <TouchableOpacity
          onPress={this.onBandPress.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>BAND</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.OnMusicianPress.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>MUSICIAN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    paddingTop: 60,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  band: {
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },

  buttonText: {
    fontSize: 26,
    color: 'whitesmoke'
  }
});
