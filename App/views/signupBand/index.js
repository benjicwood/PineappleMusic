import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Picker
} from 'react-native';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

const background = require('./bandbackground.png');
const backIcon = require('./back.png');
const bandIcon = require('./signup_band.png');
const lockIcon = require('./signup_lock.png');
const emailIcon = require('./signup_email.png');
const musicalNoteIcon = require('./signup_musicalnote.png');

var modalDropdownOptionsGenres = [];
var modalDropdownOptionsIntruments = [];

class SignupBand extends Component {

  componentWillMount () {
    modalDropdownOptionsGenres = this.props.genres.map(function (genre) {
      return genre.name;
    });
     modalDropdownOptionsIntruments = this.props.instruments.map(function (instrument) {
      return instrument.name;
    });
  }
  onBackPress () {
    this.props.navigator.push({
      id: 'InitialScreen'
    });
  }

  onMatchPress () {
    // signup click handler
    // verify new profile info post it to API , set it to state, set it to local storage
    // OR
    // reject info as incorrect / incomplete

    this.props.navigator.push({
      id: 'Matches'
    });
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
              <Text style={styles.titleViewText}>Band Sign Up</Text>
            </View>

          </View>

          <View style={styles.inputsContainer}>

            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={bandIcon}
                  style={styles.inputIcon}
                  resizeMode='contain'
                />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder='Band Name'
                placeholderTextColor='#FFF'
                underlineColorAndroid='transparent'
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
                <Picker
                  style={styles.picker}
                  onValueChange={() => this.setState({})}
                  >
                  <Picker.Item label='guitar' value='guitar' />
                  <Picker.Item label='piano' value='piano' />
                  <Picker.Item label='violin' value='violin' />
                </Picker>
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
                <View style={styles.selection}>
                <Picker
                  style={styles.picker}
                  onValueChange={() => this.setState({})}
                  >
                  <Picker.Item label='rock' value='rock' />
                  <Picker.Item label='pop' value='pop' />
                  <Picker.Item label='metal' value='metal' />
                  <Picker.Item label='rap' value='rap' />
                </Picker>
              </View>
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
                <Text style={styles.whiteFont}>Signupple</Text>
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
    instruments: state.instrument.instruments
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchGenres: function () {
      dispatch (actions.fetchGenres());
    },
    fetchInstruments: function () {
      dispatch (actions.fetchInstruments());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignupBand);


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
    backgroundColor: '#e9e104',
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
    color: '#FFF',
    fontSize: 20
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

  },
  picker: {
    width: 200,
    color: '#FFF',
    ...Platform.select({
      ios: { bottom: 100 },
      android: { paddingVertical: 18 }
})
}
});
