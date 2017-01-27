import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Image
} from 'react-native';

import { Container, Content, Icon, Spinner } from 'native-base';

import background from '../matches/pineapplecandg.jpg';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

const instrumentName = [
  "Electric Guitar",
  "Bass Guitar",
  "Acoustic Guitar",
  "Violin",
  "Cello",
  "Saxophone",
  "Trumpet",
  "Piccolo",
  "Flute",
  "Clarinet",
  "Oboe",
  "Bassoon",
  "Trombone",
  "French horn",
  "Tuba",
  "Drums",
  "Kettledrum",
  "Bongos",
  "Conga (drum)",
  "Cymbals"
];

const instrumentId = [
  "588898cb65e40796fa13d472",
  "588898cb65e40796fa13d473",
  "588898cb65e40796fa13d474",
  "588898cb65e40796fa13d475",
  "588898cb65e40796fa13d476",
  "588898cb65e40796fa13d477",
  "588898cb65e40796fa13d478",
  "588898cb65e40796fa13d479",
  "588898cb65e40796fa13d47a",
  "588898cb65e40796fa13d47b",
  "588898cb65e40796fa13d47c",
  "588898cb65e40796fa13d47d",
  "588898cb65e40796fa13d47e",
  "588898cb65e40796fa13d47f",
  "588898cb65e40796fa13d480",
  "588898cb65e40796fa13d481",
  "588898cb65e40796fa13d482",
  "588898cb65e40796fa13d483",
  "588898cb65e40796fa13d484",
  "588898cb65e40796fa13d485"
];

const genreId = [
  '588898cb65e40796fa13d462',
  '588898cb65e40796fa13d463',
  '588898cb65e40796fa13d464',
  '588898cb65e40796fa13d465',
  '588898cb65e40796fa13d466',
  '588898cb65e40796fa13d467',
  '588898cb65e40796fa13d468',
  '588898cb65e40796fa13d469',
  '588898cb65e40796fa13d46a',
  '588898cb65e40796fa13d46b',
  '588898cb65e40796fa13d46c',
  '588898cb65e40796fa13d46d',
  '588898cb65e40796fa13d46e',
  '588898cb65e40796fa13d46f',
  '588898cb65e40796fa13d470',
  '588898cb65e40796fa13d471',
];

var genreName = [
  "Avant Garde",
  "Blues",
  "Carribean",
  "Comedy",
  "Country",
  "Easy Listening",
  "Electronic",
  "Folk",
  "Hip Hop",
  "Jazz",
  "Latin",
  "Pop",
  "R&B & Soul",
  "Rock",
  "Metal",
  "Indie"
];

export default class Profile extends Component {

  componentWillMount () {

  }

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

  render () {
    if (this.props.isLoading) {
      return (
        <Image source={background} style={[styles.container, styles.background]}>
          <View style={{left: 160, bottom: 20}}>
            <Spinner color='yellow' />
          </View>
        </Image>
      );
    }
    console.warn('user profile : ',this.props.userProfile);
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
        >
          <TouchableOpacity
            onPress={this.onMatchPress.bind(this)}
            style={styles.button}>
            <Icon name='ios-arrow-back' style={{fontSize: 45, color: '#FF3232', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>BACK TO MATCHES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Icon name='md-heart-outline' style={{fontSize: 45, color: '#e9e104', top: 1}} />
            <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>UPDATE PROFILE</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  background: {
    ...Platform.select({
      ios: { paddingTop: 500 },
      android: { paddingTop: 490 }
    }),
    width: null,
    height: null
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 205,
    top: 85
  }
});
