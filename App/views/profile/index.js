import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import PlayList from './Playlist.js'

export default class MyComponent extends Component {

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

  onPlaylistPress () {
    this.props.navigator.push({
      id: 'PlayList'
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
        <TouchableOpacity onPress={this.onPlaylistPress.bind(this)}>
        <Text>Playlist</Text>
        </TouchableOpacity>
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
