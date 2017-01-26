import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import { Icon, Spinner, Container, Content, List, ListItem, Thumbnail } from 'native-base';

import background from '../matches/pineapplecandg.jpg';

import { connect } from 'react-redux';
import actions from '../../actions/actions';
var date = '';
class LikesMe extends Component {

  componentWillMount () {
    date = this.props.list[0].liked_by;
  }

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

  onLikesMePress () {
    this.props.navigator.push({
      id: 'LikesMe'
    });
  }

  render () {
    if (this.props.isLoading) {
      return (
        <Image source={background} style={[styles.container, styles.background]}>
          <View style={{left: 160, bottom: 20}}>
            <Spinner color='yellow' />
          </View>
        </Image>
      );
    }
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
        >
          <TouchableOpacity
            onPress={this.onLikesMePress.bind(this)}
            style={styles.button}>
            <Icon name='md-heart-outline' style={{fontSize: 45, color: '#e9e104', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>MY HEAVEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onMatchPress.bind(this)}
            style={styles.button}>
            <Icon name='md-heart-outline' style={{fontSize: 45, color: '#e9e104', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>BACK TO MATCHES</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    isLoading: state.theirHeaven.isLoading,
    list: state.theirHeaven.list
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

export default connect(mapStateToProps, mapDispatchToProps)(LikesMe);

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
    top: 85
  }
});
