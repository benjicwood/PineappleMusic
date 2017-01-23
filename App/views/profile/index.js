import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  WebView
} from 'react-native';

import RCTYouTubeExample from './stream.js';

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
        <RCTYouTubeExample/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  toMatches: {
    paddingTop: 20,
    fontSize: 20
  }
});
