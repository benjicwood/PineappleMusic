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

var band = require('./band.jpg');

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
      <FlipCard>
        <View style={styles.face}>
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{x.user_name} </Text>
            </View>
            <View style={styles.imagebox}>
              <Image source={{uri: x.profile_pic}} style={styles.image} />
            </View>
          </View>
        </View>
        <View style={styles.back}>
          <View style={styles.card}>
            <View style={styles.imagebox}>
              <Image source={{uri: x.profile_pic}} style={styles.backimage} />
            </View>
            <View>
              <Text style={styles.name}>{x.user_name} </Text>
              <Text style={styles.backtext}>genre {x.genre}</Text>
              <Text style={styles.backtext}>instrument {x.instrument}</Text>
              <Text style={styles.backtext}>email {x.email}</Text>
              <Text style={styles.backtext}>user id {x._id}</Text>
            </View>
          </View>
        </View>
      </FlipCard>
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
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  cardcontainer: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 5
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  face: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
    backgroundColor: 'red'
  },
  back: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
    backgroundColor: 'red'
  },
  imagebox: {
    paddingTop: 5,
    alignItems: 'center',
    alignSelf: 'center'
  },
  image: {
    width: 300,
    height: 330,
    borderWidth: 1,
    borderColor: 'black'
  },
  backimage: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'white'
  },
  name: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '300',
    color: '#fff'
  },
  backtext: {
    alignSelf: 'center',
    fontSize: 10,
    fontWeight: '300',
    color: '#fff'
  }
});
