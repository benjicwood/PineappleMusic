import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';

import Card from './Card';
import { connect } from 'react-redux';
import actions  from '../../actions/actions'


class Matches extends Component {


   componentWillMount(){

     this.props.fetchMatches(this.props.userProfile);
     console.warn('user matches ' ,this.props.userMatches[0])
   }

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
console.log(this.props.userMatches);
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <TouchableOpacity
            onPress={this.onProfilePress.bind(this)}
            >
            <View style={styles.profilelink}>
              <Text style={styles.profile}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Card
          style={{flex: 1}} />
        <View style={styles.banner}>
          <TouchableOpacity
            onPress={this.onLikesMePress.bind(this)}
              >
            <View style={styles.likesMeLink}>
              <Text style={styles.likesMe}>Likes Me </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onILikePress.bind(this)}
              >
            <View style={styles.iLikeLink}>
              <Text style={styles.iLike}> I Like</Text>
            </View>
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
  profilelink: {
    paddingLeft: 325
  },
  profile: {
    fontSize: 18,
    color: 'grey'
  },
  likesMeLink: {
  },
  likesMe: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: 'grey'
  },
  iLikeLink: {
    paddingLeft: 250
  },
  iLike: {
    fontSize: 18,
    color: 'grey'
  }
});


 function mapStateToProps (state) {
 return {
   userProfile: state.profile.userProfile,
   userMatches: state.matches.userMatches,
 };
 }

function mapDispatchToProps (dispatch) {
  return {
    fetchMatches: function (profile) {
      dispatch (actions.fetchMatches(profile));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);
