import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import { Container, Content, Spinner } from 'native-base';
import background from '../matches/pineapplecandg.jpg';

import { connect } from 'react-redux';
import actions  from '../../actions/actions'
var date='';
class LikesMe extends Component {

  componentWillMount(){
    date = this.props.list[0].liked_by;
  }

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

  render () {
    if( this.props.isLoading) {
      return (
        <Image source={background} style={[styles.container, styles.background]}>
          <View style={{left: 160, bottom: 20}}>
            <Spinner color='yellow' />
          </View>
        </Image>
      )
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.onMatchPress.bind(this)}
          >
          <Text style={styles.toMatches}>Back to Matches</Text>
        </TouchableOpacity>
        <Text>THEIR HEAVEN</Text>
        <Text>{date}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LikesMe);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  toMatches: {
    paddingTop: 20,
    fontSize: 20
  },
  background: {
    ...Platform.select({
      ios: { paddingTop: 500 },
      android: { paddingTop: 490 }
    }),
    width: null,
    height: null
  }
});
