import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import SwipeCards from './SwipeCards';

import FlipCard from 'react-native-flip-card';

var band = require('./band.jpg');

const Cards = [{
  'id': 1,
  'band_name': 'Frank Carter and the Rattlesnakes',
  'image': band
}, {
  'id': 2,
  'band_name': 'Creeper',
  'image': band
}, {
  'id': 3,
  'band_name': 'Ballista',
  'image': band
}, {
  'id': 4,
  'band_name': 'Black Peaks',
  'image': band
}, {
  'id': 5,
  'band_name': 'Milk Teeth',
  'image': band
}, {
  'id': 6,
  'band_name': 'Architects',
  'image': band
}];

export default class BandCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: Cards
    };
  }
  Card (x) {
    return (
      <FlipCard>
        <View style={styles.face}>
          <View style={styles.card}>
            <View style={styles.imagebox}>
              <Image source={x.image} style={styles.image} />
            </View>
            <View>
              <Text style={styles.name}>{x.band_name} </Text>
            </View>
          </View>
        </View>
        <View style={styles.back}>
          <View style={styles.card}>
            <View style={styles.imagebox}>
              <Image source={x.image} style={styles.backimage} />
            </View>
            <View>
              <Text style={styles.name}>{x.band_name} </Text>
              <Text style={styles.backtext}>Some Band Info</Text>
              <Text style={styles.backtext}>Some More Band Info</Text>
              <Text style={styles.backtext}>etc.</Text>
            </View>
          </View>
        </View>
      </FlipCard>
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
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
    backgroundColor: 'red'
  },
  imagebox: {
    paddingTop: 20
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderColor: 'white'
  },
  backimage: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'white'
  },
  name: {
    fontSize: 20,
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
