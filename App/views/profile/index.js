import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

// import Geolocation from './geo.js';

import FlipCard from 'react-native-flip-card';

export default class MyComponent extends Component {

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
          <Text style={styles.toMatches}>Back to Matches</Text>
        </TouchableOpacity>
        <Text>THIS IS THE PROFILE PAGE</Text>
        <FlipCard>
          <View style={styles.face}>
            <View>
              <Text style={styles.name}>band name</Text>
            </View>
            <View style={styles.imagebox}>
              <Image source={require('../matches/band.jpg')} style={styles.image} />
            </View>
          </View>
          <View style={styles.back}>
            <View style={styles.card}>
              <View style={styles.imagebox}>
                <Image source={require('../matches/band.jpg')} style={styles.backimage} />
              </View>
              <View>
                <Text style={styles.name}>band name</Text>
                <Text style={styles.backtext}>Some Band Info</Text>
                <Text style={styles.backtext}>Some More Band Info</Text>
                <Text style={styles.backtext}>etc.</Text>
              </View>
            </View>
          </View>
        </FlipCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toMatches: {
    paddingTop: 15,
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },

  face: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 486,
    backgroundColor: 'red'
  },
  back: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 350,
    height: 486,
    backgroundColor: 'red'
  },

  image: {
    width: 330,
    height: 350,
    borderWidth: 1,
    borderColor: 'black'
  },
  backimage: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'white'
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '300',
    color: '#fff'
  },
  backtext: {
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: '300',
    color: '#fff'
  }
});
