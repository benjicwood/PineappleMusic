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

import { Container, Content, Icon } from 'native-base';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

const background = require('./bandbackground.png');
const backIcon = require('./back.png');

var instrumentName = [
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

var instrumentId = [
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

var genreId = [
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

class SignupBand extends Component {

  constructor (props) {
    super(props);
    this.state = {
      type: 'band',
      user_name: '',
      email: '',
      instrument: '',
      genre: ''
    };
  }

  onBackPress () {
    this.props.navigator.push({
      id: 'UserTypeSelect'
    });
  }

  // user clicks sign -in
  signInOnMatchPress () {

    // create a band mock profile object
    var bandMockProfile = {
      _id: '5889d98d6b1236a837319174',
      type: 'band',
      user_name: 'jimmys sausage butties',
      email: 'test@band.co.uk',
      instrument: '588898cb65e40796fa13d478',
      genre: '588898cb65e40796fa13d465'
    };

    // set it to the store

    this.props.createProfileLocalStorage(bandMockProfile);

    // create a tmp match query obj
    var matchProfile = {
      type: bandMockProfile.type,
      genre: bandMockProfile.genre,
      instrument: bandMockProfile.instrument
    };

    // get matches
    this.props.fetchMatches(matchProfile);

    // load matches view
    this.props.navigator.push({
      id: 'Matches'
    });

  };

  // user clicks sign-up
  onMatchPress () {
    // signup click handler

    // create profile object with text / select inputs
    var profileObj = {
      type: this.state.type,
      user_name: this.state.user_name,
      email: this.state.email,
      instrument: this.state.instrument,
      genre: this.state.genre
    };

    this.props.createProfile(profileObj.type, profileObj);

    this.props.createProfileLocalStorage(profileObj);

    var matchProfile = {
      type: profileObj.type,
      genre: profileObj.genre,
      instrument: profileObj.instrument
    };
    this.props.fetchMatches(matchProfile);

    this.props.navigator.push({
      id: 'Matches'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          source={background}
          style={[styles.container, styles.background]}
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
                <Icon name='ios-people-outline' style={{fontSize: 32, color: '#e9e104'}} />
              </View>
              <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder='Band Name'
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
          <View style={styles.signinclick}>
            <TouchableOpacity
              onPress={this.signInOnMatchPress.bind(this)}
              >
              <View style={styles.signup}>
                <Text style={styles.whiteFont}>Sign In</Text>
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
    },
    fetchMatches: function (profile) {
      dispatch (actions.fetchMatches(profile));
    },
    createProfileLocalStorage: function (profile) {
      dispatch (actions.createProfileLocalStorage(profile));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupBand);

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
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
    height: 75,
    bottom: 37
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
      android: { paddingVertical: 15 }
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
    height: 72,
    ...Platform.select({
      ios: { bottom: 100 },
      android: { color: '#FFF', paddingVertical: 30, right: 6 }
    })
  },
  signinclick: {
    bottom: 6
  }
});
