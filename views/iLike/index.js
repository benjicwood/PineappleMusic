import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ILike extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>I LIKE PAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
