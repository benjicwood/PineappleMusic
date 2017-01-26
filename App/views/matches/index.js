import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Image
} from 'react-native';

import { Container, Content, Icon } from 'native-base';

import background from './pineapplecandg.jpg';
import pineappleicon from './pineicon.png';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

import Card from './Card';

class Matches extends Component {

  componentWillMount () {

  }
  onProfilePress () {
    this.props.navigator.push({
      id: 'Profile'
    });
  }

  onLikesMePress () {
    this.props.fetchTheirHeaven(this.props.userProfile.type, '588a2e4fb89161b75bed814d');
    this.props.navigator.push({
      id: 'LikesMe'
    });
  }

  onILikePress () {
    this.props.fetchMyHeaven(this.props.userProfile.type, '588a2e4fb89161b75bed814d');
    this.props.navigator.push({
      id: 'ILike'
    });
  }

  render () {
    if (this.props.isLoading) {
      return (
        <Text>Loading ...</Text>
      );
    }
    console.warn('user id : ',this.props.userProfile);
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
        >
          <TouchableOpacity
            onPress={this.onProfilePress.bind(this)}
            style={styles.pineapple}
            >
            <Image source={pineappleicon} style={styles.profilepineapple} />
          </TouchableOpacity>
          <Card style={styles.card} />
          <TouchableOpacity
            onPress={this.onILikePress.bind(this)}
            style={styles.button}>
            <Icon name='md-heart-outline' style={{fontSize: 45, color: '#e9e104', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>MY HEAVEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onLikesMePress.bind(this)}
            style={styles.button}>
            <Icon name='md-heart-outline' style={{fontSize: 45, color: '#e9e104', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>THEIR HEAVEN</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    userProfile: state.profile.userProfile,
    userMatches: state.matches.userMatches,
    isLoading: state.matches.isLoading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchMatches: function (profile) {
      dispatch(actions.fetchMatches(profile));
    },
    fetchMyHeaven: function (id) {
      dispatch(actions.fetchMyHeaven(id));
    },
    fetchTheirHeaven: function (id) {
      dispatch(actions.fetchTheirHeaven(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  background: {
    ...Platform.select({
      ios: { paddingTop: 500 },
      android: { paddingTop: 490 }
    }),
    width: null,
    height: null
  },
  profilepineapple: {
    width: 100,
    height: 100
  },
  pineapple: {
    bottom: 480,
    left: 330
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 205,
    right: 460,
    top: 85
  }
});
