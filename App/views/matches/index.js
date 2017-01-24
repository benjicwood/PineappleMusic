import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native';

import { connect } from 'react-redux';
import actions  from '../../actions/actions'

import Card from './Card';

class Matches extends Component {

   componentWillMount(){
     // do stuff ASAP
   }

  onProfilePress () {
    this.props.navigator.push({
      id: 'Profile'
    });
  }

  onLikesMePress () {
    this.props.fetchTheirHeaven(this.props.userProfile._id);
    this.props.navigator.push({
      id: 'LikesMe'
    });
  }

  onILikePress () {
    this.props.fetchMyHeaven(this.props.userProfile._id);
    this.props.navigator.push({
      id: 'ILike'
    });
  }

  render () {
    if(this.props.isLoading===true){
      <Text>Loading ...</Text>
    }
    console.warn('user matches ' ,this.props.userMatches[0])

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
      dispatch (actions.fetchMatches(profile));
    },
    fetchMyHeaven: function (id) {
      dispatch (actions.fetchMyHeaven(id));
    },
    fetchTheirHeaven: function (id) {
      dispatch (actions.fetchTheirHeaven(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);

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

