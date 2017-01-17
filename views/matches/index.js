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
            <Text style={{paddingLeft: 340, fontSize: 18}}>Profile</Text>
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
    borderRadius: 4,
    borderWidth: 0.5,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'whitesmoke'
  },
  banner: {
    justifyContent: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: { flex: 0.1 },
      android: { flex: 0.12 }
    }),
    borderWidth: 1,
    height: 50,
    borderColor: 'green',
    alignItems: 'center'
  },
  likesMe: {
    alignSelf: 'flex-end',
    fontSize: 18
  },
  iLike: {
    fontSize: 18
  }
});
