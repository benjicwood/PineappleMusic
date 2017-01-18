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

  onProfilePress () {
    this.props.navigator.push({
      id: 'Profile'
    });
  }

  onLikesMePress () {
    this.props.navigator.push({
      id: 'LikesMe'
    });
  }

  onILikePress () {
    this.props.navigator.push({
      id: 'ILike'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity
            onPress={this.onProfilePress.bind(this)}
            >
            <Text style={styles.profile}>Profile</Text>
          </TouchableOpacity>
        </View>
        <Card
          style={{flex: 1}} />
        <View style={styles.banner}>
          <TouchableOpacity
            onPress={this.onLikesMePress.bind(this)}
            >
            <Text style={styles.likesMe}>Likes Me </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onILikePress.bind(this)}
            >
            <Text style={styles.iLike}> I Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    justifyContent: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: { flex: 0.1 },
      android: { flex: 0.1 }
    }),
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  profile: {
    fontSize: 18,
    color: 'grey'
  },
  likesMe: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: 'grey'
  },
  iLike: {
    fontSize: 18,
    color: 'grey'
  }
});
