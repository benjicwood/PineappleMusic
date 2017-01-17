import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';

import Card from './Card';

export default class Matches extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity>
            <Text style={{paddingLeft: 340, fontSize: 18}}>Profile</Text>
          </TouchableOpacity>
        </View>
        <Card
          style={{flex: 1}} />
        <View style={styles.banner}>
          <Text style={{paddingLeft: 340, fontSize: 18}}>Likes Me</Text>
          <Text style={{paddingLeft: 340, fontSize: 18}}>I Like</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  banner: {
    flexDirection: 'row',
    ...Platform.select({
      ios: { flex: 0.1 },
      android: { flex: 0.12 }
    }),
    borderWidth: 1,
    height: 50,
    borderColor: 'green',
    alignItems: 'center'
  }
});
