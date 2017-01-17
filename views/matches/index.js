import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

import Card from './Card';

export default class Matches extends Component {
  render () {
    return (
      <View style={styles.container1}>
        <TouchableOpacity style={styles.container2}><Text>Hi</Text></TouchableOpacity>
        <Card
          style={{flex: 1}} />
        <TouchableOpacity style={styles.container2}><Text>Hi</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    borderRadius: 4,
    borderWidth: 0.5,
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  container2: {
    borderRadius: 4,
    borderWidth: 0.5,
    height: 100,
    width: 400,
    backgroundColor: 'black'
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  }
});
