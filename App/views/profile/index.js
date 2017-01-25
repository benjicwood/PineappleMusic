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
} from 'react-native';

// import Geolocation from './geo.js';

import FlipCard from 'react-native-flip-card';

export default class MyComponent extends Component {

  static route = {
    navigationBar: {
      visible: false,
    },
  };

  state = {
    scrollY: new Animated.Value(0),
  };

  onMatchPress () {
    this.props.navigator.push({
      id: 'Matches'
    });
  }


  dataRender() {
    return Array.from({ length: 50 }).map((_, i) =>
      <TouchableOpacity key={i} style={styles.row}>
        <Text>{i}</Text>
      </TouchableOpacity>
    );
  }
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
          <FlipCard>
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
                <Text style={styles.name}>Hairy and his coconuts</Text>
                {this.dataRender()}
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
                  <TouchableOpacity onPress={() => { this.props.navigator.pop() }} hitSlop={{top: 15, left: 15, bottom: 15, right: 15}}>
                    <Image
                      style={styles.backButton}
                      source={{ uri: 'https://www.android.com/static/img/map/back-arrow.png' }}
                    />
                  </TouchableOpacity>

                  <Animated.View pointerEvents="none" style={[styles.titleContainer, {opacity: titleOpacity, transform: [{ translateY: titleTranslate }] }]}>
                    <Text style={styles.title}>
                      Hairy and his coconut
                    </Text>
                  </Animated.View>

                  <View style={styles.rightButton} />
                </View>
              </View>
            </View>

            <StatusBar barStyle="light-content" />
          </View>
          <View style= {styles.back}>
          <Text>BACK OF PROFILE</Text>
          </View>
          </ FlipCard>
        );
      }
    }



    const styles = StyleSheet.create({
      row: {
        margin: 10,
        padding: 20,
        backgroundColor: '#eee',
      },
      fill: {
        flex: 1,
        backgroundColor: '#fff',
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
    });
