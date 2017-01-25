import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';

const { height, width } = Dimensions.get('window');

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
          resizeMode='cover'
        >
          <TouchableOpacity
            onPress={this.onBandPress.bind(this)}
            style={styles.button}
            >
            <Text style={styles.buttonText}>BAND</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onBandPress.bind(this)}
            style={styles.button}
            >
            <Text style={styles.buttonText}>MUSICIAN</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    ...Platform.select({
      ios: { paddingTop: 500 },
      android: { paddingTop: 490 }
    }),
    width: null,
    height: null
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.width,
    height: 80
  },
  buttonText: {
    fontSize: 26,
    color: 'whitesmoke'
  }
});
