import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import actions  from '../../actions/actions'
import ModalDropdown from 'react-native-modal-dropdown';

const background = require('./signup_bg.png');
const backIcon = require('./back.png');
const musicianIcon = require('./signup_musician.png');
const lockIcon = require('./signup_lock.png');
const emailIcon = require('./signup_email.png');
const musicalNoteIcon = require('./signup_musicalnote.png');

class SignupMusician extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'Musician',
      userName: 'some-text',
      email: 'some@email.bla',
      password: 'some_sekret_pwd',
      instrument: 'Violin',
      genre: 'Pop'
    };
  }

  onBackPress () {
    this.props.navigator.push({
      id: 'InitialScreen'
    });
  }

  onMatchPress () {
    // signup click handler

    // create profile object with text / select inputs
  var profileObj = {
    type: this.state.type,
    user_name: this.state.userName,
    email: this.state.email,
    user: this.state.password,
      // need to save the instrument ID , not the instrument name **********
    instrument: this.state.instrument,
      // same goes for genres. *********************************************
    genre: this.state.genre
  };
    // verify profile info here

    // set profile obj to store - need action dispatcher for that

    // make JSON profile obj to send to API
    //var foo = JSON.stringify(newProfileObj);

    // send JSON profile str to API

   // console.warn(foo);

    // JSON.stringify profile obj for local storage

    //set JSON profile obj to local storage
   // AsyncStorage.setItem('foo', foo).done(); // fuck this off for now

    // send profile obj to API call getMatches

    actions.createProfile(profileObj.type, profileObj);
      var matchProfile = {
          type: profileObj.type,
          genre: profileObj.genre,
          instrument: profileObj.instrument
      };

    actions.fetchMatches({"type":"musician","instrument":"5877c4893aecdd49742d833b", "genre":"5877c48b3aecdd49742d8359"});

    //load matches view



/*

    waterfall(){

      // nav : loading

      // one thing

      // another thing

      // some other thing

      // CB nav : matches
    }
*/


















    this.props.navigator.push({
      id: 'Matches'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.bg]}
          resizeMode='cover'
        >
          <View style={styles.headerContainer}>

            <View style={styles.headerIconView}>
              <TouchableOpacity
                onPress={this.onBackPress.bind(this)}
                style={styles.headerBackButtonView}>
                <Image
                  source={backIcon}
                  style={styles.backButtonIcon}
                  resizeMode='contain'
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTitleView}>
              <Text style={styles.titleViewText}>Musician Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={musicianIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder='User Name'
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={emailIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <TextInput
                keyboardType='email-address'
                autoCapitalize='none'
                style={[styles.input, styles.whiteFont]}
                placeholder='Email'
                placeholderTextColor='#FFF'
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={lockIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <TextInput
                secureTextEntry
                style={[styles.input, styles.whiteFont]}
                placeholder='Password'
                placeholderTextColor='#FFF'
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={musicalNoteIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.selection}>
                <ModalDropdown
                  defaultValue='Select Instrument'
                  textStyle={[styles.dropdownFont]}
                  dropdownStyle={styles.dropdownBox}
                  options={[
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
                    'Piano']} />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder=''
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={musicalNoteIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.selection}>
                <ModalDropdown
                  defaultValue='Select Genre'
                  textStyle={[styles.dropdownFont]}
                  dropdownStyle={styles.dropdownBox}
                  options={['Metal',
                    'Trance',
                    'Pop',
                    'Rock',
                    'SpookyCore']}
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder=''
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
              />
            </View>

          </View>

          <View style={styles.footerContainer}>

            <TouchableOpacity
              onPress={this.onMatchPress.bind(this)}
              >
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Create a Pineapple</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.signin}>
                <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
              </View>
            </TouchableOpacity>
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
    createProfile: function (profileType, profile) {
      dispatch (actions.createProfile(profileType, profile));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupMusician);

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50
  },
  footerContainer: {
    ...Platform.select({
      ios: { flex: 0.65 },
      android: { flex: 0.6 }
    })
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff'
  },
  inputs: {
    paddingVertical: 20
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75
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
  input: {
    flex: 1,
    fontSize: 20
  },
  signup: {
    backgroundColor: '#FF3366',
    ...Platform.select({
      ios: { paddingVertical: 23 },
      android: { paddingVertical: 18 }
    }),
    alignItems: 'center',
    justifyContent: 'center'
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  },
  dropdownFont: {
    alignItems: 'center',
    color: '#FFF',
    fontSize: 20
  },
  dropdownBox: {
    width: 300,
    justifyContent: 'center'
  },
  selection: {
    alignItems: 'flex-end',
    paddingTop: 20

  }
});
