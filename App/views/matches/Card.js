import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
//import actions  from '../../actions/actions'

import SwipeCards from './SwipeCards';

import FlipCard from 'react-native-flip-card';

var band = require('./band.jpg');

// if matches isLoading=true , use soem default loadin card
// if isLOading: false && matches userMAtches.length >0
// map userMAtches to Cards

/*
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
*/

class BandCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: this.props.matches
    };
  }
  Card (x) {
    return (
      <FlipCard>
        <View style={styles.face}>
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{x.band_name} </Text>
            </View>
            <View style={styles.imagebox}>
              <Image source={{uri: x.profile_pic}} style={styles.image}
              >{this.props.children}</Image>
            </View>
          </View>
        </View>
        <View style={styles.back}>
          <View style={styles.card}>
            <View style={styles.imagebox}>
              <Image source={{uri: x.profile_pic}} style={styles.backimage} />
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


function mapStateToProps (state) {
  return {
    matches: state.matches.userMatches
  };
}

export default connect(mapStateToProps)(BandCards);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  cardcontainer: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#d3d3d3',
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
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  face: {
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover'

  },
  back: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#d3d3d3',
    width: 350,
    height: 420,
    backgroundColor: '#d3d3d3'
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
    borderColor: '#d3d3d3'
  },
  backimage: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: '#d3d3d3'
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
