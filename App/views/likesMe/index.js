import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

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
    if( this.props.isLoading){
      return (
          <Text>Loading ...</Text>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikesMe);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toMatches: {
    paddingTop: 20,
    fontSize: 20
  }
});
