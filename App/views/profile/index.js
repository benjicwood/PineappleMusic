import Exponent from 'exponent';
import React, { Component } from 'react';

import {
  Animated,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  Picker,
  TextInput
} from 'react-native';
import { Container, Content, Icon } from 'native-base';

import { connect } from 'react-redux';
import actions from '../../actions/actions';

// import Geolocation from './geo.js';

import FlipCard from 'react-native-flip-card';

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

const genreName = [
  "avant garde",
  "blues",
  "carribean",
  "comedy",
  "country",
  "easy listening",
  "electronic",
  "folk",
  "hip hop",
  "jazz",
  "latin",
  "pop",
  "R&B & Soul",
  "rock",
  "metal",
  "indie"
];


class  MyComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      phone_number: '',
      email: 'foo',
      instrument: '',
      genre: '',
      profile_pic: '',
      scrollY: new Animated.Value(0),


    };
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  };


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
    this.props.navigator.pop()
};

  onMatchPress () {

    this.props.navigator.push({
      id: 'Matches'
    });
  }


  /* dataRender() {
    return Array.from({ length: 50 }).map((_, i) =>
      <TouchableOpacity key={i} style={styles.row}>
        <Text>{i}</Text>
      </TouchableOpacity>
    );
  }*/
      render() {
        const imageOpacity = this.state.scrollY.interpolate({
          inputRange: [0, 94],
          outputRange: [1, 0],
        });

        const imageTranslate = this.state.scrollY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 100],
        });
        const imageScale = this.state.scrollY.interpolate({
          inputRange: [-100, 0, 100],
          outputRange: [2.5, 1, 1],
          extrapolate: 'clamp',
        });
        const headerTranslate = this.state.scrollY.interpolate({
          inputRange: [0, 200],
          outputRange: [-1, -200],
        });
        const navBarBackgroundOpacity = this.state.scrollY.interpolate({
          inputRange: [0, 93, 94],
          outputRange: [0, 0, 1],
        });
        const profileTranslateY = this.state.scrollY.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [1, 0, -0.8],
        });
        const profileTranslateX = this.state.scrollY.interpolate({
          inputRange: [-1, 0, 150, 151],
          outputRange: [0, 0, -11.25, -11.25],
        });
        const profileScale = this.state.scrollY.interpolate({
          inputRange: [-1, 0, 150, 151],
          outputRange: [1, 1, 0.6, 0.6],
          extrapolate: 'clamp',
        });
        const titleOpacity = this.state.scrollY.interpolate({
          inputRange: [0, 220, 250],
          outputRange: [0, 0, 1],
        });
        const titleTranslate = this.state.scrollY.interpolate({
          inputRange:  [-1,  0, 220, 250, 251],
          outputRange: [20, 20,  20,   0,   0],
          extrapolate: 'clamp',
        });
        return (
          <View style={{flex: 1}}>
            <View style={{height: Platform.OS === 'android' ? 24 : 26, position: 'absolute', top: 0, left: 0, right:0, backgroundColor: 'black'}} />
            <View style={[styles.fill, { overflow: 'hidden' }]}>
              <Animated.ScrollView
                scrollEventThrottle={16}
                style={styles.fill}
                contentContainerStyle={styles.content}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                  { useNativeDriver: true }
                )}
              >
                <Text style={styles.name}>Update your profile</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    keyboardType='email-address'
                    autoCapitalize='none'
                    style={[styles.input, styles.blackFont]}
                    placeholder={this.state.email}
                    placeholderTextColor='black'
                    onChangeText={(email) => this.setState({email:email})}
                    value={this.state.email}

                    />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    keyboardType='numeric'
                    autoCapitalize='none'
                    style={[styles.input, styles.blackFont]}
                    placeholder='add phone'
                    placeholderTextColor='black'
                    onChangeText={(phone_number) => this.setState({phone_number})}
                    value={this.state.phone_number}

                    />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                      autoCapitalize='none'
                      style={[styles.input, styles.blackFont]}
                      placeholder='Profile Image URL'
                      placeholderTextColor='black'
                      onChangeText={(profile_pic) => this.setState({profile_pic})}
                      value={this.state.profile_pic}
                  />
                </View>
                <View style={styles.inputContainer}>
                      <Picker
                      style={styles.picker}
                      selectedValue={this.state.instrument}
                      onValueChange={(value) => this.setState({instrument: value})}>
                    <Picker.Item label={instrumentName[0]} value={instrumentId[0]} />
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
  </View>
                  <View style={styles.inputContainer}>
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
                  </View>
              </Animated.ScrollView>

              <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslate }] }]} pointerEvents="none">
                <Animated.Image
                  style={[styles.image, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }, { scale: imageScale } ] }]}
                  resizeMode="cover"
                  source={{ uri: 'https://ua-1.cdn-fullscreendirect.com/7549/2016_0924_7549_4694.jpeg ' }}
                />
              </Animated.View>

              <Animated.View style={[
                styles.profile,
                { transform: [{ translateY: profileTranslateY }, { translateX: profileTranslateX }, { scale: profileScale }] }
              ]}>
                <Image
                  resizeMode="cover"
                  style={styles.profileImage}
                  source={{uri: 'http://vignette2.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/90/METALLICA.jpg/revision/latest/scale-to-width-down/600?cb=20110516235810'}}
                />
              </Animated.View>

              <View style={styles.navbar}>
                <Animated.View style={[styles.navbarBackground, { opacity: navBarBackgroundOpacity }]} />

                <View style={[StyleSheet.absoluteFill, {flexDirection: 'row', alignItems: 'center'}]}>
                  <TouchableOpacity onPress={this.doSummat.bind(this)} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Image
                      style={styles.backButton}
                      source={{ uri: 'https://www.android.com/static/img/map/back-arrow.png' }}
                    />
                  </TouchableOpacity>

                  <Animated.View pointerEvents="none" style={[styles.titleContainer, {opacity: titleOpacity, transform: [{ translateY: titleTranslate }] }]}>
                    <Text style={styles.title}>
                      Back to Maqtches
                    </Text>
                  </Animated.View>

                  <View style={styles.rightButton} />
                </View>
              </View>
            </View>

            <StatusBar barStyle="light-content" />
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
          dispatch (actions.updateProfile(profileType, id, profile));
        },
        fetchMatches: function (profile) {
          dispatch (actions.fetchMatches(profile));
        }
      };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);




    const styles = StyleSheet.create({
      row: {
        margin: 10,
        padding: 20,
        backgroundColor: '#eee',
      },
      fill: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        marginTop: Platform.OS === 'android' ? 24 : 26,
      },
      image: {
        height: 150,
      },
      header: {
        overflow: 'hidden',
        position: 'absolute',
        top: -300,
        left: 0,
        right: 0,
        backgroundColor: '#008b8b',
        height: 450,
        paddingTop: 300
      },
      navbar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
      },
      navbarBackground: {
        backgroundColor: '#008b8b',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      },
      profile: {
        width: 100,
        height: 100,
        backgroundColor: '#d3d3d3',
        borderRadius: 8,
        position: 'absolute',
        top: 120,
        left: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileImage: {
        width: 90,
        height: 90,
      },
      content: {
        backgroundColor: '#d3d3d3',
        paddingTop: 150,
      },
      name: {
        backgroundColor: 'transparent',
        marginTop: 60,
        marginBottom: 16,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
      backButton: {
        width: 20,
        height: 20,
        marginLeft: 16,
        tintColor: 'white',
      },
      rightButton: {
        width: 20,
        height: 20,
        marginRight: 16,
      },
      titleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
      },
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
        borderWidth: 9,
        borderBottomColor: 'black',
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
      blackFont: {
        color: 'black',
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
        ...Platform.select({
          ios: { bottom: 100 },
          android: { color: 'black', paddingVertical: 30 }
    })
    }
    });
