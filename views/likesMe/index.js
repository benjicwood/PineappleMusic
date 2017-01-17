import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class LikesMe extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>LIKES ME PAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
