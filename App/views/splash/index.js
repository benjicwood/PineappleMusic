import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import actions  from '../../actions/actions'
import {AsyncStorage} from 'react-native';

var profile = {"type":"musician","instrument":"5877c4893aecdd49742d833b", "genre":"5877c48b3aecdd49742d8359"};

class Splash extends Component {

  componentWillMount() {

    // fetchGenres API call
    this.props.fetchGenres();
    // fetchInstruments API call
    this.props.fetchInstruments();

      this.props.navigator.push({
        id: 'UserTypeSelect'
      })
  };
  onBandPress () {
    this.props.navigator.push({
      id: 'SignupBand'
    });
  }

  OnMusicianPress () {
    this.props.navigator.push({
      id: 'SignupMusician'
    });
  }

  render () {
    return (
      <View style={styles.container}>
    <Text> Loading </Text>
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
    genres: state.genre.genres,
    instruments: state.instrument.instruments,
    userProfile: state.profile.userProfile,
    isLoading: state.matches.isLoading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchGenres: function () {
      dispatch (actions.fetchGenres());
    },
    fetchInstruments: function () {
      dispatch (actions.fetchInstruments());
    },
    fetchMatches: function (profile) {
      dispatch (actions.fetchMatches(profile));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  band: {
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    height: 50,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
