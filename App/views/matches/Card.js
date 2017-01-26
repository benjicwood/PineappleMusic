import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import actions  from '../../actions/actions'


import SwipeCards from './SwipeCards';

import FlipCard from 'react-native-flip-card';

var currentCard = {};

class BandCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: this.props.matches
    };
  }
  Card (x) {
    currentCard = x;
    return (
      <View>
        <Text style={styles.name}>{x.user}</Text>
        <FlipCard>
          <View style={styles.face}>
            <View style={styles.imagebox}>
              <Image source={{uri: x.profile_pic}} style={styles.image} />
            </View>
          </View>
          <View style={styles.back}>
            <Image source={{uri: x.profile_pic}} style={styles.backimage} />
            <View>
              <Text style={styles.name}>{x.user_name} </Text>
              <Text style={styles.backtext}>genre {x.genre}</Text>
              <Text style={styles.backtext}>instrument {x.instrument}</Text>
              <Text style={styles.backtext}>email {x.email}</Text>
              <Text style={styles.backtext}>user id {x._id}</Text>
            </View>
          </View>
        </FlipCard>
      </View>
    );
  }

  // yup and nope are NAMED wrong way round but work !!
  handleYup () {

/*    // send to hell
    var connection = {
      type : 'hell',
      source_id: 'id',
      target_id: 'id'
    };
    this.props.createConnection(connection);*/
  }

  handleNope () {

/*    // send to heaven
    var connection = {
      type : 'heaven',
      source_id: 'id',
      target_id: 'id'
    };
    this.props.createConnection(connection);*/
  }
  loop () {
    console.warn('restart');
  }
  yup () {
    console.log(this.refs['swiper']);
    this.refs['swiper']._goToNextCard();
  }
  nope () {
    console.log(this.refs['swiper']);
    this.refs['swiper']._goToNextCard();
  }

  render () {
    return (
      <View style={styles.container}>
        <SwipeCards
          ref={'swiper'}
          cards={this.state.cards}
          containerStyle={styles.cardcontainer}
          renderCard={(cardData) => this.Card(cardData)}
          handleYup={this.handleYup()}
          handleNope={this.handleNope()} />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    matches: state.matches.userMatches,
    userProfile: state.profile.userProfile
  };
}

function mapDispatchToProps (dispatch) {
  return {
    createConnection: function (connection) {
      dispatch (actions.createConnection(connection));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BandCards);

const styles = StyleSheet.create({
  cardcontainer: {
    alignItems: 'center',
    margin: 5,
    width: 350,
    height: 436,
    bottom: 395,
    right: 75
  },
  face: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e9e104',
    width: 350,
    height: 405,
    backgroundColor: 'black'
  },
  back: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e9e104',
    width: 350,
    height: 405,
    backgroundColor: 'black'
  },
  image: {
    width: 345,
    height: 401,
    borderWidth: 1,
    borderColor: 'black'
  },
  backimage: {
    width: 345,
    height: 401,
    borderWidth: 1,
    borderColor: 'black',
    opacity: 0.2
  },
  name: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: '300',
    color: 'white'
  },
  backtext: {
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: '300',
    color: 'white',
    opacity: 1,
    bottom: 350
  }
});
