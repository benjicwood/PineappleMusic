import React, { Component, AsyncStorage } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class MyComponent extends Component {
// save userData for local storage
  saveData (value) {
    AsyncStorage.setItem('userData', value);
    this.setState({'userData': value});
  }


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
