import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import cookie from './band.jpg';
//import actions  from '../../actions/actions'

import SwipeCards from './SwipeCards';

import FlipCard from 'react-native-flip-card';

// if matches isLoading=true , use soem default loadin card
// if isLOading: false && matches userMAtches.length >0
// map userMAtches to Cards

class BandCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: this.props.matches
    };
  }
  Card (x) {
    return (
      <View>
        <Text style={styles.name}>{x.user}</Text>
      <FlipCard>
        <View style={styles.face}>
          <View style={styles.imagebox}>
            <Image source={{uri: x.profile_pic}} style={styles.image}>
            </Image>
          </View>
        </View>
        <View style={styles.back}>
          <Image source={{uri: x.profile_pic}} style={styles.backimage} />
          <View>
            <Text style={styles.backtext}>Some Band Info</Text>
            <Text style={styles.backtext}>Some More Band Info</Text>
            <Text style={styles.backtext}>etc.</Text>
          </View>
        </View>
      </FlipCard>
      </View>
    );
  }
  handleYup (card) {
    // console.warn(`Hell ${card.text}`);
  }

  handleNope (card) {
    // console.warn(`Heaven ${card.text}`);
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
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    matches: state.matches.userMatches
  };
}

export default connect(mapStateToProps)(BandCards);

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
    color: '#fff'
  }
});
