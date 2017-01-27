import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  Image,
  TextInput,
  Picker
} from 'react-native';

import ImagePicker from './camera';

import { Icon, Spinner } from 'native-base';

import cookiemonster from '../matches/band.jpg';

import background from '../matches/pineapplecandg.jpg';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

const instrumentName = [
  'Electric Guitar',
  'Bass Guitar',
  'Acoustic Guitar',
  'Violin',
  'Cello',
  'Saxophone',
  'Trumpet',
  'Piccolo',
  'Flute',
  'Clarinet',
  'Oboe',
  'Bassoon',
  'Trombone',
  'French horn',
  'Tuba',
  'Drums',
  'Kettledrum',
  'Bongos',
  'Conga (drum)',
  'Cymbals'
];

const instrumentId = [
  '588898cb65e40796fa13d472',
  '588898cb65e40796fa13d473',
  '588898cb65e40796fa13d474',
  '588898cb65e40796fa13d475',
  '588898cb65e40796fa13d476',
  '588898cb65e40796fa13d477',
  '588898cb65e40796fa13d478',
  '588898cb65e40796fa13d479',
  '588898cb65e40796fa13d47a',
  '588898cb65e40796fa13d47b',
  '588898cb65e40796fa13d47c',
  '588898cb65e40796fa13d47d',
  '588898cb65e40796fa13d47e',
  '588898cb65e40796fa13d47f',
  '588898cb65e40796fa13d480',
  '588898cb65e40796fa13d481',
  '588898cb65e40796fa13d482',
  '588898cb65e40796fa13d483',
  '588898cb65e40796fa13d484',
  '588898cb65e40796fa13d485'
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
  '588898cb65e40796fa13d471'
];

var genreName = [
  'Avant Garde',
  'Blues',
  'Carribean',
  'Comedy',
  'Country',
  'Easy Listening',
  'Electronic',
  'Folk',
  'Hip Hop',
  'Jazz',
  'Latin',
  'Pop',
  'R&B & Soul',
  'Rock',
  'Metal',
  'Indie'
];

class Profile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phone_number: this.props.userProfile.phone_number,
      email: this.props.userProfile.email,
      instrument: this.props.userProfile.instrument,
      genre: this.props.userProfile.genre,
      profile_pic: this.props.userProfile.profile_pic

    };
  }

  doSummat () {
    var profileObj = {
      user_name: this.state.user_name,
      email: this.state.email,
      profile_pic: this.state.profile_pic,
      // need to save the instrument ID , not the instrument name **********
      instrument: this.state.instrument,
      // same goes for genres. *********************************************
      genre: this.state.genre
    };

    this.props.updateProfile(this.props.userProfile.type, this.props.userProfile._id, profileObj);
  // this.props.createProfileLocalStorage(profileObj);
    this.props.navigator.pop();
  }

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }

    selectPhotoTapped() {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
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
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
        >
          <View style={styles.headerTitleView}>
            <Text style={styles.titleViewText}>My Profile</Text>
            <Text style={styles.subtitles}>thisdotusername</Text>
          </View>
          <Image source={cookiemonster} style={styles.profilepicture}>
            <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
              <View style={styles.camerathing}>
                <ImagePicker />
              { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                <Image style={styles.avatar} source={this.state.avatarSource} />

              }
              </View>
            </TouchableOpacity>
            </Image>
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name='ios-phone-portrait-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder='Phone Number'
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
                onChangeText={(user_name) => this.setState({user_name: user_name})}
                value={this.state.user_name}
            />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name='ios-mail-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>
              <TextInput
                keyboardType='email-address'
                autoCapitalize='none'
                style={[styles.input, styles.whiteFont]}
                placeholder='Email'
                placeholderTextColor='#FFF'
                onChangeText={(email) => this.setState({email: email})}
                value={this.state.email}
            />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name='ios-key-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>
              <TextInput
                secureTextEntry
                style={[styles.input, styles.whiteFont]}
                placeholder='Password'
                placeholderTextColor='#FFF'
            />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name='ios-glasses-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>
              <Picker
                style={styles.picker}
                selectedValue={this.state.instrument}
                onValueChange={(value) => this.setState({instrument: value})}>
                <Picker.Item label={instrumentName[0]} value={instrumentId[0]} fontSize={30} />
                <Picker.Item label={instrumentName[1]} value={instrumentId[1]} />
                <Picker.Item label={instrumentName[2]} value={instrumentId[2]} />
                <Picker.Item label={instrumentName[3]} value={instrumentId[3]} />
                <Picker.Item label={instrumentName[4]} value={instrumentId[4]} />
                <Picker.Item label={instrumentName[5]} value={instrumentId[5]} />
                <Picker.Item label={instrumentName[6]} value={instrumentId[6]} />
                <Picker.Item label={instrumentName[7]} value={instrumentId[7]} />
                <Picker.Item label={instrumentName[8]} value={instrumentId[8]} />
                <Picker.Item label={instrumentName[9]} value={instrumentId[9]} />
                <Picker.Item label={instrumentName[10]} value={instrumentId[10]} />
                <Picker.Item label={instrumentName[11]} value={instrumentId[11]} />
                <Picker.Item label={instrumentName[12]} value={instrumentId[12]} />
                <Picker.Item label={instrumentName[13]} value={instrumentId[13]} />
                <Picker.Item label={instrumentName[14]} value={instrumentId[14]} />
                <Picker.Item label={instrumentName[15]} value={instrumentId[15]} />
              </Picker>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder=''
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
            />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name='ios-musical-notes-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>

              <Picker
                style={styles.picker}
                selectedValue={this.state.genre}
                onValueChange={(value) => this.setState({genre: value})}>
                <Picker.Item label={genreName[0]} value={genreId[0]} />
                <Picker.Item label={genreName[1]} value={genreId[1]} />
                <Picker.Item label={genreName[2]} value={genreId[2]} />
                <Picker.Item label={genreName[3]} value={genreId[3]} />
                <Picker.Item label={genreName[4]} value={genreId[4]} />
                <Picker.Item label={genreName[5]} value={genreId[5]} />
                <Picker.Item label={genreName[6]} value={genreId[6]} />
                <Picker.Item label={genreName[7]} value={genreId[7]} />
                <Picker.Item label={genreName[8]} value={genreId[8]} />
                <Picker.Item label={genreName[9]} value={genreId[9]} />
                <Picker.Item label={genreName[10]} value={genreId[10]} />
                <Picker.Item label={genreName[11]} value={genreId[11]} />
                <Picker.Item label={genreName[12]} value={genreId[12]} />
                <Picker.Item label={genreName[13]} value={genreId[13]} />
                <Picker.Item label={genreName[14]} value={genreId[14]} />
                <Picker.Item label={genreName[15]} value={genreId[15]} />
              </Picker>

              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder=''
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
                />
            </View>
            <View style={styles.buttonlayout}>
            <TouchableOpacity
              onPress={this.onMatchPress.bind(this)}
              style={styles.button}>
              <Icon name='ios-arrow-back' style={{fontSize: 45, color: '#FF3232', top: 1}} />
              <Text style={{fontSize: 16, color: 'whitesmoke', bottom: 2}}>BACK TO MATCHES</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Image>
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
    updateProfile: function (profileType, id, profile) {
      dispatch(actions.updateProfile(profileType, id, profile));
    },
    fetchMatches: function (profile) {
      dispatch(actions.fetchMatches(profile));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
    width: 405,
    right: 232,
    top: 10
  },
  input: {
    flex: 1,
    fontSize: 20
  },
  inputsContainer: {
    flex: 3,
    bottom: 300,
    right: 165
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginLeft: 20,
    bottom: 450
  },
  titleViewText: {
    fontSize: 30,
    color: '#fff'
  },
  subtitles: {
    fontSize: 20,
    color: '#fff',
    width: 200
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
    width: 380,
    bottom: 3,
    right: 220
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    width: 30,
    height: 30
  },
  whiteFont: {
    color: '#FFF',
    fontSize: 20
  },
  picker: {
    width: 200,
    height: 72,
    ...Platform.select({
      ios: { bottom: 100 },
      android: { color: '#FFF', paddingVertical: 30, right: 6 }
    })
  },
  profilepicture: {
    width: 180,
    height: 180,
    bottom: 480,
    left: 3,
    borderWidth: 1,
    borderColor: '#e9e104'
  },
  camerathing: {
    width: 180,
    height: 180
  }
});
