import React, { Component, AsyncStorage } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const background = require('./usertypeselect.png');

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
          style={[styles.container, styles.bg]}
          resizeMode='cover'
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
    backgroundColor: 'black'
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  band: {
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },
  button: {
    flex: 0.2,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});
